<template>
  <v-layout row wrap>
    <v-flex xs12 md4 xl2>
      <user-card />
    </v-flex>
    <v-flex xs12 md8 xl10 class="pl-md-6">
      <h1>Recent orders</h1>
      <order-list />
    </v-flex>
  </v-layout>
</template>

<script>
import UserCard from '~/components/auth/UserCard'
import OrderList from '~/components/orders/List'
export default {
  components: {
    UserCard,
    OrderList
  },
  data: () => ({}),
  mounted () {
    this.$store.dispatch('auth/generateUser')
    this.$axios.$get('https://me-frontend-challenge-api.herokuapp.com/orders/1')
  }
}
</script>
