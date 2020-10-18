<template>
  <v-app-bar color="primary" class="px-sm-6" height="75px">
    <v-toolbar-title>
      <img src="/logo2.png" height="60px" class="mt-2">
    </v-toolbar-title>
    <v-spacer />
    <v-btn
      v-for="button in buttons"
      :key="button.page"
      class="navbar-btn hidden-xs-only"
      text
      :to="{ name: button.page }"
      exact
    >
      <v-icon class="mr-2">
        {{ button.icon }}
      </v-icon>
      {{ button.text }}
    </v-btn>
    <v-btn class="navbar-btn hidden-xs-only" text @click="logout">
      <v-icon class="mr-2">
        mdi-logout
      </v-icon>
      Logout
    </v-btn>
    <v-btn class="hidden-sm-and-up" icon @click="toggleMobileDrawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { getNavBarButtons } from '~/helpers/constants'
export default {
  data: () => ({
    buttons: getNavBarButtons()
  }),
  methods: {
    logout () {
      this.$store.commit('auth/LOGOUT')
      this.$router.push({ name: 'index' })
    },
    toggleMobileDrawer () {
      this.$nuxt.$emit('toggleMobileDrawer')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-btn {
  height: 100% !important;
  text-transform: none;
}
</style>
