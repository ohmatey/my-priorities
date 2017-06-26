import React from 'react'
import { shallowToJson } from 'enzyme-to-json'
import { shallow } from 'enzyme'

import { MyPriority } from './MyPriority'

describe('MyPrioritiesList component', () => {
  it('matches snapshot', () => {
    const tree = shallowToJson(
      <MyPriority />
    )
    expect(tree).toMatchSnapshot()
  })

  it('matches snapshot with props', () => {
    const tree = shallowToJson(
      <MyPriority id={0} name={'Work'} hours={2} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('handles on click', () => {
    const mock = jest.fn()
    const component = shallow(
      <MyPriority id={0} name={'Work'} hours={2} removePriorityById={mock} />
    )
    component.find('.card-footer-item').simulate('click')
    expect(mock).toBeCalled()
  })
})
