export default ({ store, $vuetify }) => {
  const isDarkMode = localStorage.getItem('darkmode') === 'true'
  store.commit('auth/SET_DARKMODE', isDarkMode)
  $vuetify.theme.dark = isDarkMode
}
