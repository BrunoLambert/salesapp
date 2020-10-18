import { mount } from '@vue/test-utils'
import OrderList from '@/components/orders/List.vue'

describe('OrderList', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(OrderList)
    expect(wrapper.vm).toBeTruthy()
  })
})
