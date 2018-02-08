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

  it('has a direction prop', () => {
    const direction = 'vertical'
    const wrapper = mount(Split, { propsData: { direction } })
    expect(wrapper.getProp('direction')).to.equal(direction)
  })

  it('has a sizes prop', () => {
    const sizes = [1, 2, 3]
    const wrapper = mount(Split, { propsData: { sizes } })
    expect(wrapper.getProp('sizes')).to.equal(sizes)
  })

  it('has a minSize prop', () => {
    const minSize = 100
    const wrapper = mount(Split, { propsData: { minSize } })
    expect(wrapper.getProp('minSize')).to.equal(minSize)
  })

  it('has a gutterSize prop', () => {
    const gutterSize = 10
    const wrapper = mount(Split, { propsData: { gutterSize } })
    expect(wrapper.getProp('gutterSize')).to.equal(gutterSize)
  })

  it('has a snapOffset prop', () => {
    const snapOffset = 30
    const wrapper = mount(Split, { propsData: { snapOffset } })
    expect(wrapper.getProp('snapOffset')).to.equal(snapOffset)
  })

  it('has a cursor prop', () => {
    const cursor = 'foo'
    const wrapper = mount(Split, { propsData: { cursor } })
    expect(wrapper.getProp('cursor')).to.equal(cursor)
  })

  it('has an onDrag method', () => {
    const wrapper = mount(Split)
    expect(typeof wrapper.methods().onDrag).to.equal('function')
  })

  it('has an onDragStart method', () => {
    const wrapper = mount(Split)
    expect(typeof wrapper.methods().onDragStart).to.equal('function')
  })

  it('has an onDragEnd method', () => {
    const wrapper = mount(Split)
    expect(typeof wrapper.methods().onDragEnd).to.equal('function')
  })

})