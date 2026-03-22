<template>
  <v-container class="py-16" id="pricing">
    <h2 class="text-center text-h4 font-weight-bold mb-10" data-aos="fade-up">Membresías</h2>
    
    <v-row v-if="loading" justify="center">
      <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
    </v-row>
    
    <v-row v-else>
      <v-col v-for="(plan, index) in plans" :key="plan.id" cols="12" md="4" data-aos="fade-up" :data-aos-delay="index * 150">
        <v-card class="glass-card pa-6 d-flex flex-column h-100">
          <v-card-title class="text-h5 font-weight-bold text-center text-primary">{{ plan.name }}</v-card-title>
          <v-card-subtitle class="text-h4 text-center my-4 font-weight-black">${{ plan.price }}<span class="text-body-1">/mes</span></v-card-subtitle>
          
          <v-list bg-color="transparent" class="flex-grow-1">
            <v-list-item v-for="(f, i) in plan.features" :key="i" class="px-0">
              <template v-slot:prepend>
                <v-icon color="success">mdi-check-circle</v-icon>
              </template>
              <v-list-item-title>{{ f }}</v-list-item-title>
            </v-list-item>
          </v-list>
          
          <v-btn color="primary" block class="mt-6 text-none font-weight-bold" size="large" rounded>
            Elegir Plan
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase'

const plans = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const snapshot = await getDocs(collection(db, 'precios'))
    if (!snapshot.empty) {
      plans.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    } else {
      loadFallback()
    }
  } catch (error) {
    console.error("Error fetching pricing plans:", error)
    loadFallback()
  } finally {
    loading.value = false
  }
})

function loadFallback() {
  plans.value = [
    { id: '1', name: 'Básico', price: 29.99, features: ['Acceso Gym de 8am a 4pm', 'Uso de maquinas', 'Duchas'] },
    { id: '2', name: 'Pro', price: 49.99, features: ['Acceso Gym 24/7', 'Todas las clases grupales', 'Evaluación mensual'] },
    { id: '3', name: 'Elite', price: 79.99, features: ['Todo lo anterior', 'Entrenador personal', 'Spa y Nutricionista incluido'] }
  ]
}
</script>
