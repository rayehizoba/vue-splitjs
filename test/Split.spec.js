import { expect } from 'chai'
import { mount } from 'avoriaz'
import Split from '../src/Split.vue'

describe('Split.vue', () => {
  it('has a root element with class split-container', () => {
    const wrapper = mount(Split)
    expect(wrapper.is('.split-container')).to.equal(true)
  })

  it('has an elements prop', () => {
    const elements = ['#id1', '#id2']
    const wrapper = mount(Split, { propsData: { elements } })
    expect(wrapper.getProp('elements')).to.equal(elements)
  })
})