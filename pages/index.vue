<template>
  <v-layout row wrap class="login-layout align-center primary">
    <v-flex class="text-center">
      <img src="/logo2.png" class="mb-6">
      <v-card>
        <v-card-title class="pb-0">
          <h3>Login</h3>
        </v-card-title>
        <v-card-text class="pt-0">
          <v-text-field
            v-model="login.username"
            label="Usuário"
            outlined
            hide-details="auto"
            class="my-4"
            :disabled="loading"
          />
          <v-text-field
            v-model="login.passworrd"
            label="Senha"
            outlined
            type="password"
            hide-details="auto"
            class="my-4"
            :disabled="loading"
          />
          <v-btn block :loading="loading" color="primary" @click="simulateLogin">
            Entrar
          </v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  layout: 'blank',
  data: () => ({
    login: {
      username: '',
      password: ''
    },
    loading: false
  }),
  methods: {
    simulateLogin () {
      this.loading = true
      setTimeout(() => {
        this.$store.dispatch('auth/generateUser')
        this.loading = false
        this.$router.push({ name: 'home' })
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
.login-layout {
  min-height: 100vh;
  & .v-card {
    width: 400px;
    max-width: 95vw;
    margin: auto;
  }
}
</style>
