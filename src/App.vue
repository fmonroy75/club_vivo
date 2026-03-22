<template>
  <v-app>
    <AppNavbar />
    
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppNavbar from './components/AppNavbar.vue'
</script>

<style>
/* Vuetify handles most global styles */
html {
  scroll-behavior: smooth;
}
</style>
