<template>
  <v-container v-if="loadingAuth" class="d-flex justify-center fill-height align-center" style="min-height: 50vh;">
    <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
  </v-container>

  <v-container v-else-if="!user" class="py-16">
    <v-row justify="center">
      <v-col cols="12" md="6" lg="4">
        <v-card class="pa-6 elevation-3">
          <div class="text-center mb-6">
            <v-icon size="64" color="primary">mdi-shield-lock</v-icon>
            <h2 class="text-h5 font-weight-bold mt-2">Acceso Restringido</h2>
          </div>
          <v-form @submit.prevent="handleLogin">
            <v-text-field v-model="email" label="Correo Electrónico" type="email" required variant="outlined"></v-text-field>
            <v-text-field v-model="password" label="Contraseña" type="password" required variant="outlined" class="mt-2"></v-text-field>
            <v-btn type="submit" color="primary" block size="large" :loading="loadingLogin" class="mt-4 font-weight-bold">Iniciar Sesión</v-btn>
            <v-alert v-if="loginError" type="error" class="mt-4 text-body-2" variant="tonal">{{ loginError }}</v-alert>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-container v-else class="py-10">
    <div class="d-flex justify-space-between align-center mb-8">
      <h1 class="text-h3 font-weight-bold">Panel de Administración</h1>
      <v-btn color="error" variant="outlined" @click="handleLogout" prepend-icon="mdi-logout">Cerrar Sesión</v-btn>
    </div>

    <v-tabs v-model="tab" bg-color="primary" class="mb-6 rounded">
      <v-tab value="blog">Blog</v-tab>
      <v-tab value="pricing">Membresías</v-tab>
      <v-tab value="messages">Mensajes de Contacto</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      
      <!-- BLOG TAB -->
      <v-window-item value="blog">
        <v-card class="pa-6 mb-6">
          <v-card-title>Agregar Nuevo Artículo</v-card-title>
          <v-form @submit.prevent="addBlogPost" ref="blogForm">
            <v-text-field v-model="newPost.title" label="Título del Artículo" required></v-text-field>
            <v-text-field v-model="newPost.image" label="URL de la Imagen (opcional)"></v-text-field>
            <v-textarea v-model="newPost.content" label="Contenido" required rows="4"></v-textarea>
            <v-btn type="submit" color="success" :loading="loading" class="mt-2">Publicar Artículo</v-btn>
          </v-form>
        </v-card>

        <h3 class="text-h5 mb-4 mt-10">Artículos Publicados</h3>
        <v-row>
          <v-col v-for="post in blogPosts" :key="post.id" cols="12" md="4">
            <v-card>
              <v-img :src="post.image || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48'" height="150" cover></v-img>
              <v-card-title>{{post.title}}</v-card-title>
              <v-card-actions>
                <v-btn color="error" variant="text" @click="deleteDocById('blog', post.id)">Eliminar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-window-item>

      <!-- PRICING TAB -->
      <v-window-item value="pricing">
        <v-card class="pa-6 mb-6">
          <v-card-title>Agregar Nueva Membresía</v-card-title>
          <v-form @submit.prevent="addPricingPlan" ref="pricingForm">
            <v-text-field v-model="newPlan.name" label="Nombre del Plan (ej. Básico)" required></v-text-field>
            <v-text-field v-model="newPlan.price" label="Precio (ej. 29.99)" type="number" step="0.01" required></v-text-field>
            <v-textarea v-model="newPlan.featuresRaw" placeholder="- Acceso Gym 24/7&#10;- Duchas incluidas&#10;- Clases de Yoga" label="Beneficios (uno por línea)" required rows="4"></v-textarea>
            <v-btn type="submit" color="success" :loading="loading" class="mt-2">Crear Plan</v-btn>
          </v-form>
        </v-card>

        <h3 class="text-h5 mb-4 mt-10">Planes Activos</h3>
        <v-row>
          <v-col v-for="plan in pricingPlans" :key="plan.id" cols="12" md="4">
            <v-card>
              <v-card-title>{{plan.name}} - ${{plan.price}}</v-card-title>
              <v-card-text>
                <ul class="pl-4">
                  <li v-for="(f, i) in plan.features" :key="i">{{f}}</li>
                </ul>
              </v-card-text>
              <v-card-actions>
                <v-btn color="error" variant="text" @click="deleteDocById('precios', plan.id)">Eliminar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-window-item>

      <!-- CONTACT MESSAGES TAB -->
      <v-window-item value="messages">
        <h3 class="text-h5 mb-4">Mensajes de Contacto Recibidos</h3>
        <v-card v-for="msg in contactMsgs" :key="msg.id" class="mb-4 pa-4 elevation-2">
          <v-card-title class="text-subtitle-1 font-weight-bold px-0">{{msg.name}} ({{msg.email}})</v-card-title>
          <v-card-subtitle class="px-0">{{msg.phone || 'Sin teléfono'}} - {{ msg.date ? new Date(msg.date.seconds * 1000).toLocaleString() : 'Sin Fecha' }}</v-card-subtitle>
          <v-card-text class="px-0 py-2">{{msg.message}}</v-card-text>
          <v-card-actions class="px-0">
            <v-btn color="error" size="small" variant="text" @click="deleteDocById('contacts', msg.id)">Marcar como leído / Borrar</v-btn>
          </v-card-actions>
        </v-card>
        <div v-if="contactMsgs.length === 0" class="text-grey my-6 text-center">No hay mensajes de contacto.</div>
      </v-window-item>

    </v-window>
  </v-container>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { collection, getDocs, addDoc, deleteDoc, doc, orderBy, query } from 'firebase/firestore'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { db, auth } from '../firebase/firebase'

defineOptions({ name: 'AdminPanel' })

// Auth state
const user = ref(null)
const loadingAuth = ref(true)
const email = ref('')
const password = ref('')
const loadingLogin = ref(false)
const loginError = ref('')

// Tabs
const tab = ref('blog')
const loading = ref(false)

const blogForm = ref(null)
const pricingForm = ref(null)

const newPost = ref({ title: '', image: '', content: '' })
const newPlan = ref({ name: '', price: '', featuresRaw: '' })

const blogPosts = ref([])
const pricingPlans = ref([])
const contactMsgs = ref([])

let authUnsubscribe = null

onMounted(() => {
  authUnsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    user.value = currentUser
    loadingAuth.value = false
    
    if (currentUser) {
      await fetchData()
    }
  })
})

onUnmounted(() => {
  if (authUnsubscribe) authUnsubscribe()
})

async function handleLogin() {
  if (!email.value || !password.value) return
  loadingLogin.value = true
  loginError.value = ''
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    // fetchData will be triggered by onAuthStateChanged
  } catch (error) {
    console.error(error)
    loginError.value = 'Credenciales inválidas. Verifica tu correo y contraseña.'
  }
  loadingLogin.value = false
}

async function handleLogout() {
  try {
    await signOut(auth)
    // Clear data securely
    blogPosts.value = []
    pricingPlans.value = []
    contactMsgs.value = []
  } catch (error) {
    console.error('Logout error:', error)
  }
}

async function fetchData() {
  try {
    // Fetch Blog
    const blogSnap = await getDocs(collection(db, 'blog'))
    blogPosts.value = blogSnap.docs.map(d => ({ id: d.id, ...d.data() }))

    // Fetch Pricing
    const pricingSnap = await getDocs(collection(db, 'precios'))
    pricingPlans.value = pricingSnap.docs.map(d => ({ id: d.id, ...d.data() }))

    // Fetch Contact
    try {
      const qContacts = query(collection(db, 'contacts'), orderBy('date', 'desc'))
      const contactSnap = await getDocs(qContacts)
      contactMsgs.value = contactSnap.docs.map(d => ({ id: d.id, ...d.data() }))
    } catch {
      // Fallback in case 'date' descending index doesn't exist
      const contactSnap = await getDocs(collection(db, 'contacts'))
      contactMsgs.value = contactSnap.docs.map(d => ({ id: d.id, ...d.data() }))
    }
  } catch (error) {
    console.error("Error al cargar los datos en el Admin Panel. Verifica los permisos de Firebase.", error)
    if (error.code === 'permission-denied') {
      alert("Permiso denegado por Firebase. Asegúrate de ser administrador.")
    }
  }
}

async function addBlogPost() {
  if(!newPost.value.title || !newPost.value.content) return
  loading.value = true
  try {
    await addDoc(collection(db, 'blog'), {
      title: newPost.value.title,
      image: newPost.value.image,
      content: newPost.value.content,
      createdAt: new Date()
    })
    newPost.value = { title: '', image: '', content: '' }
    if(blogForm.value) blogForm.value.reset()
    await fetchData()
    alert("Post publicado con éxito.")
  } catch(e) {
    console.error(e)
    alert("Error al publicar.")
  }
  loading.value = false
}

async function addPricingPlan() {
  if(!newPlan.value.name || !newPlan.value.price || !newPlan.value.featuresRaw) return
  loading.value = true
  try {
    // Convert multiple lines into an array
    const featuresArray = newPlan.value.featuresRaw.split('\n')
      .map(f => f.trim().replace(/^-/, '').trim())
      .filter(f => f !== '')

    await addDoc(collection(db, 'precios'), {
      name: newPlan.value.name,
      price: Number(newPlan.value.price),
      features: featuresArray
    })
    newPlan.value = { name: '', price: '', featuresRaw: '' }
    if(pricingForm.value) pricingForm.value.reset()
    await fetchData()
    alert("Membresía creada con éxito.")
  } catch(e) {
    console.error(e)
    alert("Error al crear la membresía.")
  }
  loading.value = false
}

async function deleteDocById(collectionName, id) {
  if(!confirm("¿Seguro que deseas eliminar este registro permanentemente?")) return
  try {
    await deleteDoc(doc(db, collectionName, id))
    await fetchData()
  } catch(e) {
    console.error(e)
    alert("Hubo un error al eliminar.")
  }
}
</script>
