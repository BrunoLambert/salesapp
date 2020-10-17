<template>
  <v-layout row wrap>
    <v-flex v-for="(order, orderIndex) in orders" :key="orderIndex" xs12 xl6 class="px-xl-4 my-4">
      <order-card :order="order" list />
    </v-flex>
  </v-layout>
</template>

<script>
import OrderCard from '~/components/orders/Card'
export default {
  components: {
    OrderCard
  },
  data: () => ({
    orders: []
  }),
  mounted () {
    this.getOrders()
  },
  methods: {
    async getOrders () {
      try {
        const order = await this.$axios.$get('https://me-frontend-challenge-api.herokuapp.com/orders/1')
        this.orders = [...Array(this.$faker.random.number({ min: 4, max: 10 }))].map(arr => order)
      } catch (error) {
        alert('Erro inesperado, por favor tente novamente.')
      }
    }
  }
}
</script>
