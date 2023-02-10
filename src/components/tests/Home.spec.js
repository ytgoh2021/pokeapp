import { mount } from '@vue/test-utils'
import Home from '../../components/HeaderBar.vue'


// describe('Home', () => {
//   it('fetches data from PokeAPI and displays it', async () => {
//     const wrapper = mount(Home)
//     await wrapper.vm.fetchPoke(1)
//     expect(wrapper.find('.name').text()).toBe('Bulbasaur')
//     // expect(wrapper.find('.pokemon-id').text()).toBe('#25')
//     // expect(wrapper.find('.pokemon-type').text()).toBe('Electric')
//   })
// })
test('check data', ()=> {
  const wrapper = mount(Home)

})