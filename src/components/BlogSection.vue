<template>
  <v-container class="py-16" id="blog">
    <h2 class="text-center text-h4 font-weight-bold mb-10" data-aos="fade-up">Nuestro Blog Fitness</h2>
    
    <v-row v-if="loading" justify="center">
      <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
    </v-row>

    <v-row v-else>
      <v-col v-for="(post, index) in posts" :key="post.id" cols="12" md="4" data-aos="zoom-in" :data-aos-delay="index * 150">
        <v-card class="glass-card h-100 d-flex flex-column hover-card">
          <v-img 
            :src="post.image || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80'" 
            height="250" 
            cover
          ></v-img>
          
          <v-card-title class="font-weight-bold mt-2 align-start text-wrap" style="line-height:1.2;">
            {{ post.title }}
          </v-card-title>
          
          <v-card-text class="flex-grow-1 text-truncate" style="max-height: 80px; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; line-clamp: 3; -webkit-box-orient: vertical;">
            {{ post.content }}
          </v-card-text>
          
          <v-card-actions class="px-4 pb-4">
            <v-btn color="primary" variant="text" class="text-none" @click="openPost(post)">
              Leer más <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Post Detail Dialog -->
    <v-dialog v-model="dialog" max-width="800" scrollable>
      <v-card class="glass-card" v-if="selectedPost">
        <v-img 
          :src="selectedPost.image || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80'" 
          height="300" 
          cover
        ></v-img>
        
        <v-card-title class="text-h4 font-weight-bold mt-4 mx-2" style="white-space: pre-wrap; line-height: 1.2;">
          {{ selectedPost.title }}
        </v-card-title>
        
        <v-divider class="mx-4 my-2"></v-divider>

        <v-card-text class="text-body-1 mx-2 mb-4" style="white-space: pre-line;">
          {{ selectedPost.content }}
        </v-card-text>
        
        <v-card-actions class="pb-4 pr-4 bg-black bg-opacity-50">
          <v-spacer></v-spacer>
          <v-btn color="primary" variant="elevated" @click="dialog = false" class="px-6">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase'

const posts = ref([])
const loading = ref(true)

const dialog = ref(false)
const selectedPost = ref(null)

function openPost(post) {
  selectedPost.value = post
  dialog.value = true
}

onMounted(async () => {
  try {
    const snapshot = await getDocs(collection(db, 'blog'))
    if (!snapshot.empty) {
      posts.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    } else {
      loadFallback()
    }
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    loadFallback()
  } finally {
    loading.value = false
  }
})

function loadFallback() {
  posts.value = [
    { id: '1', title: '5 Consejos infalibles para ganar masa muscular', content: 'Aumentar la masa muscular requiere más que solo levantar pesas pesadas. La nutrición y el descanso son claves.' },
    { id: '2', title: '¿Cardio en ayunas sí o no?', content: 'El eterno debate sobre si hacer cardio en ayunas quema más grasa o simplemente te hace perder músculo.' },
    { id: '3', title: 'Beneficios del HIIT', content: 'Descubre por qué el entrenamiento en intervalos de alta intensidad es tu mejor aliado si tienes poco tiempo.' }
  ]
}
</script>

<style scoped>
.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(255, 61, 0, 0.2) !important;
}
</style>
