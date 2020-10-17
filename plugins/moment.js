import Moment from 'moment'

export default (context, inject) => {
  inject('moment', Moment)
}
