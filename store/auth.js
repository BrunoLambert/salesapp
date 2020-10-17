export const state = () => ({
  user: {},
  isLogged: false,
  darkMode: true
})

export const mutations = {
  SET_USER (state, payload) {
    state.user = payload
    state.isLogged = true
  },
  SET_ISLOGGED (state, paylaod) {
    state.isLogged = paylaod
  },
  LOGOUT (state) {
    state.isLogged = false
    state.user = {}
  },
  SET_DARKMODE (state, payload) {
    state.darkMode = payload
    localStorage.setItem('darkmode', payload)
  }
}

export const actions = {
  generateUser ({ commit }) {
    commit('SET_USER', {
      username: this.$faker.internet.userName(),
      avatar: this.$faker.internet.avatar(),
      email: this.$faker.internet.email(),
      name: this.$faker.name.firstName(),
      lastName: this.$faker.name.lastName(),
      phone: this.$faker.phone.phoneNumber(),
      fax: this.$faker.phone.phoneNumber(),
      address: `${this.$faker.address.streetName()}, ${this.$faker.random.number({ min: 10, max: 1000 })}`
    })
  }
}
