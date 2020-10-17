import Faker from 'faker/locale/pt_BR'

export default (context, inject) => {
  inject('faker', Faker)
}
