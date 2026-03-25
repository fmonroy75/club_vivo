<template>
  <v-footer class="bg-secondary text-white pt-16 pb-8" id="contact">
    <v-container>
      <v-row>
        <!-- Ubicación -->
        <v-col cols="12" md="4" class="mb-6 mb-md-0" data-aos="fade-right">
          <div class="d-flex align-center mb-6">
            <v-img :src="logo" max-width="120" alt="Club Vive" />
          </div>
          <h3 class="text-h6 font-weight-bold mb-4 text-primary">Nuestra Ubicación</h3>
          <p class="d-flex align-start mb-2">
            <v-icon color="primary" class="mr-3 mt-1">mdi-map-marker</v-icon>
            <span>Av. Principal de la Salud #123<br />Distrito Capital, Ciudad 10001</span>
          </p>
          <p class="d-flex align-center mb-2">
            <v-icon color="primary" class="mr-3">mdi-phone</v-icon>
            <span>+1 234 567 890</span>
          </p>
          <p class="d-flex align-start">
            <v-icon color="primary" class="mr-3 mt-1">mdi-clock-outline</v-icon>
            <span>Lunes a Viernes: 6:00 AM - 11:00 PM<br />Fines de semana: 8:00 AM - 8:00 PM</span>
          </p>
        </v-col>

        <!-- Redes Sociales -->
        <v-col
          cols="12"
          md="4"
          class="text-md-center mb-6 mb-md-0"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 class="text-h6 font-weight-bold mb-6 text-primary">Síguenos en las Redes</h3>
          <p class="mb-6 text-grey-lighten-1">
            Únete a nuestra comunidad y mantente al tanto de nuestros eventos, retos y promociones
            exclusivas.
          </p>
          <div>
            <v-btn
              icon
              color="transparent"
              elevation="0"
              size="large"
              href="https://facebook.com"
              target="_blank"
              class="mx-1 social-btn"
            >
              <v-icon size="x-large">mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              icon
              color="transparent"
              elevation="0"
              size="large"
              href="https://instagram.com"
              target="_blank"
              class="mx-1 social-btn"
            >
              <v-icon size="x-large">mdi-instagram</v-icon>
            </v-btn>
            <v-btn
              icon
              color="transparent"
              elevation="0"
              size="large"
              href="https://twitter.com"
              target="_blank"
              class="mx-1 social-btn"
            >
              <v-icon size="x-large">mdi-twitter</v-icon>
            </v-btn>
            <v-btn
              icon
              color="transparent"
              elevation="0"
              size="large"
              href="https://youtube.com"
              target="_blank"
              class="mx-1 social-btn"
            >
              <v-icon size="x-large">mdi-youtube</v-icon>
            </v-btn>
          </div>
        </v-col>

        <!-- WhatsApp -->
        <v-col cols="12" md="4" class="text-md-right" data-aos="fade-left" data-aos-delay="200">
          <h3 class="text-h6 font-weight-bold mb-6 text-primary">Atención Inmediata</h3>
          <p class="mb-6 text-grey-lighten-1">
            ¿Tienes preguntas sobre nuestras membresías o quieres reservar una clase de prueba
            gratis? Escríbenos.
          </p>
          <v-btn
            color="#25D366"
            prepend-icon="mdi-whatsapp"
            size="x-large"
            class="text-white font-weight-bold"
            elevation="4"
            href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Club%20Vive!"
            target="_blank"
            rounded
          >
            Contactar por WhatsApp
          </v-btn>
        </v-col>
      </v-row>

      <v-divider class="my-6 border-opacity-25" color="white"></v-divider>

      <div class="text-center text-body-2 text-grey-lighten-2">
        <p class="mb-1">
          &copy; {{ new Date().getFullYear() }} Club Vive. Todos los derechos reservados.
        </p>
        <p class="mb-0 text-white font-weight-bold">
          Desarrollado por
          <a
            href="https://www.ingeniumbright.com"
            target="_blank"
            rel="noopener noreferrer"
            class="glow-link"
            >IngeniumBright</a
          >
          - por que lo hacemos facil
        </p>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
import logo from "@/assets/logo.jpg";
</script>

<style scoped>
.social-btn:hover .v-icon {
  color: var(--v-primary-base, #ff3d00);
  transform: scale(1.1);
  transition: all 0.3s ease;
}
.social-btn .v-icon {
  transition: all 0.3s ease;
}

.glow-link {
  color: var(--v-primary-base, #ff3d00);
  text-decoration: none;
  text-shadow: 0 0 5px rgba(255, 61, 0, 0.4);
  transition: all 0.3s ease;
}

.glow-link:hover {
  color: #ff5722;
  text-shadow:
    0 0 10px rgba(255, 61, 0, 0.8),
    0 0 20px rgba(255, 61, 0, 0.6);
}
</style>
