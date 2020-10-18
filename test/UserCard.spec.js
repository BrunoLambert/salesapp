import { mount } from '@vue/test-utils'
import UserCard from '@/components/auth/UserCard.vue'

describe('UserCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(UserCard)
    expect(wrapper.vm).toBeTruthy()
  })
})
