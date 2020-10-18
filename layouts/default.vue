<template>
  <v-app>
    <v-main>
      <navbar />
      <mobile-drawer v-if="$vuetify.breakpoint.xsOnly" />
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
import MobileDrawer from '~/components/layout/MobileDrawer'
export default {
  components: {
    Navbar,
    MobileDrawer
  }
}
</script>
