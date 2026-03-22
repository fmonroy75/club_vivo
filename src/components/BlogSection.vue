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
          
          <v-card-text class="flex-grow-1">
            {{ post.content }}
          </v-card-text>
          
          <v-card-actions class="px-4 pb-4">
            <v-btn color="primary" variant="text" class="text-none">Leer más <v-icon right>mdi-arrow-right</v-icon></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase'

const posts = ref([])
const loading = ref(true)

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
