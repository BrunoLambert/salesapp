<template>
  <v-card elevation="4" class="order-card" :class="{'list':list}" @click="openOrderDetails">
    <v-card-text>
      <v-layout row wrap class="px-3 align-center">
        <v-flex xs12 md4 xl3 class="order-numbers-data">
          <h3>Purchase Order:</h3>
          <h2>{{ order.header.number }}</h2>
          <small>SerialME {{ order.header.serial }}</small>
        </v-flex>
        <v-flex xs12 md5 xl6>
          <h1 class="mb-4">
            {{ order.header.buyer }}
          </h1>
          <p class="order-contact-data">
            <v-icon class="mr-2">
              mdi-account-group
            </v-icon>
            <span>{{ order.header.contact.name }}</span>
          </p>
          <p class="order-contact-data">
            <v-icon class="mr-2">
              mdi-email
            </v-icon>
            <span>{{ order.header.contact.email }}</span>
          </p>
          <p class="order-contact-data">
            <v-icon class="mr-2">
              mdi-phone
            </v-icon>
            <span>{{ order.header.contact.phone }}</span>
          </p>
          <p class="order-contact-data">
            <v-icon class="mr-2">
              mdi-fax
            </v-icon>
            <span>{{ order.header.contact.fax }}</span>
          </p>
        </v-flex>
        <v-flex xs12 md3 xl3 class="text-right">
          <h2 class="mb-2">
            <b>{{ formatCurrency(order.header) }}</b>
          </h2>
          <p>{{ order.header.status }}</p>
          <p>{{ $moment(order.header.createdAt).format('DD-MM-YYYY') }}</p>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-text v-if="!list">
      <v-card elevation="4" class="order-supplier-data">
        <v-card-text>
          <v-layout row wrap class="px-3">
            <v-flex xs12 class="mb-4">
              <h5>Supplier</h5>
              <h3>{{ order.supplier.name }} <small>Code #{{ order.supplier.code }}</small></h3>
            </v-flex>
            <v-flex>
              <p>{{ order.supplier.document.type }}: {{ order.supplier.document.value }}</p>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span
                    v-bind="attrs"
                    v-on="on"
                  >{{ order.supplier.address }}</span>
                </template>
                <span class="supplier-address">{{ order.supplier.address }}</span>
              </v-tooltip>
            </v-flex>
            <v-flex>
              <p>
                <v-icon class="mr-2">
                  mdi-account
                </v-icon>{{ order.supplier.contact.name }}
              </p>
              <p>
                <v-icon class="mr-2">
                  mdi-phone
                </v-icon>{{ order.supplier.contact.phone }} - <v-icon class="mr-2">
                  mdi-fax
                </v-icon>{{ order.supplier.contact.fax }}
              </p>
            </v-flex>
            <v-flex>
              <p>
                <v-icon class="mr-2">
                  mdi-eye
                </v-icon>{{ $moment(order.supplier.contact.readAt).format('DD/MM/YYYY hh:mm') }}
              </p>
              <p>
                <v-icon class="mr-2">
                  mdi-reply-all
                </v-icon>{{ $moment(order.supplier.contact.lastReplyAt).format('DD/MM/YYYY hh:mm') }}
              </p>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
      <h2 class="my-6">
        <v-icon class="mr-2">
          mdi-chevron-down
        </v-icon>Addresses
      </h2>
      <v-layout row wrap class="px-4">
        <v-flex v-for="(address, addressIndex) in order.addresses" :key="addressIndex" xs12 md4 class="px-3">
          <v-card elevation="4" class="address-card">
            <v-card-text>
              <p><small>{{ address.label }}</small></p>
              <p class="mb-3">
                <b>{{ address.name }} {{ address.code ? `- ${address.code}` : '' }}</b>
              </p>
              <p>
                <v-icon class="mr-2">
                  mdi-map-marker
                </v-icon>{{ address.address }}
              </p>
              <p>
                <v-icon class="mr-2">
                  mdi-account
                </v-icon>{{ address.contact.name }}
              </p>
              <p>
                <v-icon class="mr-2">
                  mdi-email
                </v-icon>{{ address.contact.email }}
              </p>
              <p>
                <v-icon class="mr-2">
                  mdi-phone
                </v-icon>{{ address.contact.phone }} - <v-icon class="mr-2">
                  mdi-fax
                </v-icon>{{ address.contact.fax }}
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      default: () => ({
        header: { contact: {} },
        addresses: [{ contact: {} }],
        supplier: { contact: {}, document: {} }
      })
    },
    list: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    formatCurrency ({ price, currency }) {
      return parseFloat(price).toLocaleString('pt-BR', { style: 'currency', currency })
    },
    openOrderDetails () {
      this.$router.push({ name: 'order-number', params: { number: this.order.header.number } })
    }
  }
}
</script>

<style lang="scss" scoped>
.order-card {
  transition: all 0.5s;
  max-width: 1300px;
  margin: auto;
  &:not(.list) {
    pointer-events: none !important;
  }
  &.theme--dark {
    &.list {
      &:hover {
        background-color: #555 !important;
        cursor: pointer;
      }
    }
    & .order-supplier-data, .address-card {
      border: 1px solid #444;
    }
  }
  &.theme--light {
    &.list {
      &:hover {
        background-color: #DDD !important;
        cursor: pointer;
      }
    }
    & .order-supplier-data, .address-card {
      border: 1px solid #aaa;
    }
  }
  & p {
    margin-bottom: 4px;
  }
  & .order-contact-data .v-icon, .order-supplier-data .v-icon, .address-card .v-icon {
    font-size: 14px;
  }
  & .supplier-address {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .address-card {
    height: 100%;
  }
}
</style>
