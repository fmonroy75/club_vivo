<template>
  <v-app-bar color="black" dark>
    <v-img src="/logo.jpg" max-width="120" />

    <v-spacer></v-spacer>

    <v-btn href="#">Home</v-btn>
    <v-btn href="#blog">Blog</v-btn>
    <v-btn href="#pricing">Precios</v-btn>
    <v-btn href="#contact">Contacto</v-btn>
    <v-btn icon @click="toggleTheme">
      <v-icon>
        {{ theme.global.current.value.dark ? "mdi-weather-sunny" : "mdi-weather-night" }}
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script setup>
import { useTheme } from "vuetify";

const theme = useTheme();

function toggleTheme() {
  const isDark = theme.global.current.value.dark;
  if (typeof theme.change === "function") {
    theme.change(isDark ? "light" : "dark");
  } else if (typeof theme.global.change === "function") {
    theme.global.change(isDark ? "light" : "dark");
  } else {
    // Fallback if the method isn't exactly where the warning implies
    theme.global.name.value = isDark ? "light" : "dark";
  }
}
</script>
