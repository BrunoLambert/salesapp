<template>
  <v-navigation-drawer
    v-model="opened"
    absolute
    temporary
    right
  >
    <v-list dense class="py-0">
      <v-list-item
        v-for="button in buttons"
        :key="button.page"
        link
        exact
        :to="{ name: button.page }"
        class="py-4"
      >
        <v-list-item-icon>
          <v-icon>{{ button.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          {{ button.text }}
        </v-list-item-content>
      </v-list-item>
      <v-list-item link class="py-4" @click="handleLogout">
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          Logout
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { getNavBarButtons } from '~/helpers/constants'
export default {
  data: () => ({
    opened: false,
    buttons: getNavBarButtons()
  }),
  created () {
    this.$nuxt.$on('toggleMobileDrawer', () => {
      this.opened = !this.opened
    })
  },
  destroyed () {
    this.$nuxt.$off('toggleMobileDrawer')
  },
  methods: {
    handleLogout () {
      this.$store.commit('auth/LOGOUT')
      this.$router.push({ name: 'index' })
    }
  }
}
</script>
