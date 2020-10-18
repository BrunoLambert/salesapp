<template>
  <v-layout row wrap class="justify-center">
    <v-flex xs11 sm10 md3 xl2>
      <user-card />
    </v-flex>
    <v-flex xs11 md9 xl10 class="mt-6 mt-md-0 pl-xl-6 pl-md-12">
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
