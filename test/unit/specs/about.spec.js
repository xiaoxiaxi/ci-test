import Vue from 'vue'
import About from '@/components/about'

describe('about.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(About)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.about_title').textContent)
      .to.equal('about')
  })
})
