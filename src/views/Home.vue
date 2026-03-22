<template>

<!-- HERO -->
<HeroSection/>

<!-- BENEFICIOS -->
<v-container class="py-16">

<h2 class="text-center text-h4 font-weight-bold mb-10">
Entrena con los mejores
</h2>

<v-row>

<v-col
cols="12"
md="4"
data-aos="fade-up"
>

<v-card class="glass-card pa-6 text-center">

<v-icon size="50" color="primary">
mdi-dumbbell
</v-icon>

<h3 class="mt-4">Entrenamiento funcional</h3>

<p>
Rutinas diseñadas para mejorar fuerza, movilidad y resistencia.
</p>

</v-card>

</v-col>

<v-col
cols="12"
md="4"
data-aos="fade-up"
data-aos-delay="200"
>

<v-card class="glass-card pa-6 text-center">

<v-icon size="50" color="primary">
mdi-fire
</v-icon>

<h3 class="mt-4">Clases intensivas</h3>

<p>
HIIT, cardio y entrenamientos grupales de alta energía.
</p>

</v-card>

</v-col>

<v-col
cols="12"
md="4"
data-aos="fade-up"
data-aos-delay="400"
>

<v-card class="glass-card pa-6 text-center">

<v-icon size="50" color="primary">
mdi-food-apple
</v-icon>

<h3 class="mt-4">Nutrición</h3>

<p>
Asesoría nutricional para maximizar tus resultados.
</p>

</v-card>

</v-col>

</v-row>

</v-container>

<!-- SECCION CLASES -->
<v-container fluid class="classes-section py-16">

<h2 class="text-center text-h4 font-weight-bold mb-10">
Clases destacadas
</h2>

<v-row justify="center">

<v-col cols="12" md="3" data-aos="zoom-in">

<v-img
src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
height="250"
cover
class="rounded-lg"
/>

<h3 class="mt-3 text-center">Cross Training</h3>

</v-col>

<v-col cols="12" md="3" data-aos="zoom-in" data-aos-delay="200">

<v-img
src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c"
height="250"
cover
class="rounded-lg"
/>

<h3 class="mt-3 text-center">HIIT</h3>

</v-col>

<v-col cols="12" md="3" data-aos="zoom-in" data-aos-delay="400">

<v-img
src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba"
height="250"
cover
class="rounded-lg"
/>

<h3 class="mt-3 text-center">Yoga</h3>

</v-col>

</v-row>

</v-container>

<!-- CTA MEMBRESIAS -->
<v-container class="py-16 text-center">
<h2 class="text-h4 font-weight-bold mb-6">
Comienza tu transformación hoy
</h2>
<p class="mb-8">
Únete a Club Vive y entrena con profesionales.
</p>
<v-btn
color="primary"
size="x-large"
href="#pricing"
>
Ver planes
</v-btn>
</v-container>

<!-- SECCIONES INTEGRADAS -->
<PricingSection />
<BlogSection />
<ContactFooter />

</template>

<script setup>

import HeroSection from '../components/HeroSection.vue'
import PricingSection from '../components/PricingSection.vue'
import BlogSection from '../components/BlogSection.vue'
import ContactFooter from '../components/ContactFooter.vue'

</script>

<style>

.classes-section{

background:#111;
color:white;

}

</style>
