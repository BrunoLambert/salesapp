<template>
  <v-app>
    <v-main>
      <navbar />
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      absolute
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from '~/components/layout/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>
