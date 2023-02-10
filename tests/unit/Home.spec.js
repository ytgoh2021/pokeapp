import { mount } from '@vue/test-utils'
import Home from '../../src/views/Home.vue'
global.fetch = require('isomorphic-fetch')

it('fetches data from PokeAPI and displays it', async () => {
  const wrapper = await mount(Home)
  const result = await wrapper.vm.fetchPoke(1)
  expect(result.name).toBe('bulbasaur')
  expect(result.height).toBe(7)
  expect(result.weight).toBe(69)
  
})
