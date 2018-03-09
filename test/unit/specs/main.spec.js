import Vue from 'vue'
import Main from '@/components/main'

describe('main.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Main)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.main_title').textContent)
      .to.equal('main')
  })
})
