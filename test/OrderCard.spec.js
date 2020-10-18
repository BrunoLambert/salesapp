import { mount } from '@vue/test-utils'
import OrderCard from '@/components/orders/Card.vue'

describe('OrderCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(OrderCard)
    expect(wrapper.vm).toBeTruthy()
  })
})
