<template>
  <v-app-bar color="primary" class="px-6" height="75px">
    <v-toolbar-title>
      <img src="/logo2.png" height="60px" class="mt-2">
    </v-toolbar-title>
    <v-spacer />
    <v-btn class="navbar-btn" text @click="logout">
      <v-icon class="mr-2">
        mdi-logout
      </v-icon>
      Logout
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.commit('auth/LOGOUT')
      this.$router.push({ name: 'index' })
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
