import Vue from 'vue'
import List from '@/components/list'

describe('list.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(List)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.list_title').textContent)
      .to.equal('list')
  })
})
