import { expect } from 'chai'
import { mount } from 'avoriaz'
import Split from '../src/Split.vue'

describe('Split.vue', () => {
  it('has a root element with class split-container', () => {
    const wrapper = mount(Split)
    expect(wrapper.is('.split-container')).to.equal(true)
  })
})