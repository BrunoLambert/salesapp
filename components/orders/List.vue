<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex v-if="loading" xs12 class="my-8 text-center">
        <v-progress-circular indeterminate color="primary" size="100" width="10" />
      </v-flex>
      <v-layout v-else row wrap>
        <v-flex v-for="order in ordersPage" :key="order.uuid" xs12 xl6 class="px-xl-4 my-4">
          <order-card :order="order" list />
        </v-flex>
        <v-flex xs12>
          <v-pagination
            v-model="page"
            :length="total"
            :total-visible="5"
            @input="simulateRequest"
          />
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import OrderCard from '~/components/orders/Card'
const PAGE_LENGTH = 6
export default {
  components: {
    OrderCard
  },
  data: () => ({
    orders: [],
    loading: true,
    page: 1,
    total: 1
  }),
  computed: {
    ordersPage () {
      return this.orders.slice((this.page - 1) * PAGE_LENGTH, PAGE_LENGTH * this.page)
    }
  },
  mounted () {
    this.getOrders()
  },
  methods: {
    async getOrders () {
      this.loading = true
      try {
        const order = await this.$axios.$get('https://me-frontend-challenge-api.herokuapp.com/orders/1')
        this.orders = [...Array(this.$faker.random.number({ min: PAGE_LENGTH, max: 50 }))].map(arr => ({
          ...order,
          uuid: this.$faker.random.alphaNumeric(5),
          header: {
            ...order.header,
            number: this.$faker.random.number({ min: 1000000000, max: 9999999999 }),
            serial: this.$faker.random.number({ min: 10000000, max: 99999999 }),
            buyer: this.$faker.company.companyName()
          }
        }))
        this.total = Math.ceil(this.orders.length / PAGE_LENGTH)
      } catch (error) {
        alert('Erro inesperado, por favor tente novamente.')
      }
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    simulateRequest () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  }
}
</script>
