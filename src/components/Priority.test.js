import React from 'react'
import { shallowToJson } from 'enzyme-to-json'
import { shallow } from 'enzyme'

import { Priority } from './Priority'

describe('PrioritiesList component', () => {
  it('matches snapshot', () => {
    const tree = shallowToJson(
      <Priority />
    )
    expect(tree).toMatchSnapshot()
  })

  it('matches snapshot with props', () => {
    const tree = shallowToJson(
      <Priority id={0} name={'Work'} hours={2} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('handles on click', () => {
    const mock = jest.fn()
    const component = shallow(
      <Priority id={0} name={'Work'} hours={2} addPriorityById={mock} />
    )
    component.find('.card-footer-item').simulate('click')
    expect(mock).toBeCalled()
  })
})
