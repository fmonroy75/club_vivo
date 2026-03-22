<template>
  <v-container class="py-16">

    <v-row justify="center">

      <v-col cols="12" md="8">

        <h1 class="text-h3 font-weight-bold text-center mb-8">
          Contáctanos
        </h1>

        <v-card elevation="6" class="pa-6">

          <v-form @submit.prevent="sendMessage">

            <v-text-field
              label="Nombre"
              v-model="form.name"
              required
            />

            <v-text-field
              label="Email"
              type="email"
              v-model="form.email"
              required
            />

            <v-text-field
              label="Teléfono"
              v-model="form.phone"
            />

            <v-textarea
              label="Mensaje"
              v-model="form.message"
              rows="4"
              required
            />

            <v-btn
              color="primary"
              type="submit"
              :loading="loading"
              class="mt-4"
              block
            >
              Enviar mensaje
            </v-btn>

          </v-form>

          <v-alert
            v-if="success"
            type="success"
            class="mt-4"
          >
            Mensaje enviado correctamente
          </v-alert>

        </v-card>

      </v-col>

    </v-row>

  </v-container>
</template>

<script>
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"

export default {
  data() {
    return {
      loading: false,
      success: false,
      form: {
        name: "",
        email: "",
        phone: "",
        message: ""
      }
    }
  },

  methods: {
    async sendMessage() {

      this.loading = true

      try {

        await addDoc(collection(db, "contacts"), {
          name: this.form.name,
          email: this.form.email,
          phone: this.form.phone,
          message: this.form.message,
          date: new Date()
        })

        this.success = true

        this.form.name = ""
        this.form.email = ""
        this.form.phone = ""
        this.form.message = ""

      } catch (error) {
        console.error(error)
      }

      this.loading = false
    }
  }
}
</script>

<style scoped>

h1{
  color:#111;
}

</style>
