import { mount } from '@vue/test-utils'
import MobileDrawer from '@/components/layout/MobileDrawer.vue'

describe('MobileDrawer', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MobileDrawer)
    expect(wrapper.vm).toBeTruthy()
  })
})
