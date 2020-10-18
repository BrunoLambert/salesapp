<template>
  <v-card class="user-card">
    <v-card-text class="text-center">
      <h3 class="mb-4">
        Welcome, {{ `${user.name} ${user.lastName}` }}!
      </h3>
      <img :src="user.avatar">
    </v-card-text>
    <v-divider />
    <v-card-text>
      <p>Email: <b>{{ user.email }}</b></p>
      <p>Phone: <b>{{ user.phone }}</b></p>
      <p>Fax: <b>{{ user.fax }}</b></p>
      <p>Address: <b>{{ user.address }}</b></p>
    </v-card-text>
    <v-divider />
    <v-card-text class="pb-6">
      <h3>
        <v-icon class="mr-2">
          mdi-cog
        </v-icon>Settings
      </h3>
      <v-switch v-model="darkMode" label="Dark mode" hide-details="auto" color="primary" />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.state.auth.user
    },
    darkMode: {
      get () {
        return this.$store.state.auth.darkMode
      },
      set (value) {
        this.$vuetify.theme.dark = value
        this.$store.commit('auth/SET_DARKMODE', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.user-card {
  & img {
    border: 5px solid #555;
    border-radius: 50%;
  }
  & p {
    margin-bottom: 4px;
  }
}
</style>
