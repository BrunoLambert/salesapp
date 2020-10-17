<template>
  <v-layout row wrap>
    <v-flex v-if="loading" xs12 class="loading-container">
      <v-progress-circular indeterminate color="primary" size="100" width="10" />
    </v-flex>
    <v-flex v-else xs12>
      <order-card :order="order" />
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
    order: {
      header: { contact: {} },
      addresses: [{ contact: {} }],
      supplier: { contact: {}, document: {} }
    },
    loading: true
  }),
  mounted () {
    this.getOrder()
  },
  methods: {
    async getOrder () {
      this.loading = true
      try {
        this.order = await this.$axios.$get('https://me-frontend-challenge-api.herokuapp.com/orders/1')
      } catch (error) {
        alert('Erro inesperado, por favor tente novamente.')
      }
      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-container {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
