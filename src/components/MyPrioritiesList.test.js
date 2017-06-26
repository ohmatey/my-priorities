import React from 'react'
import { shallowToJson } from 'enzyme-to-json'

import { MyPrioritiesList } from './MyPrioritiesList'
import { prioritiesList } from '../data/'

describe('MyPrioritiesList component', () => {
  it('matches snapshot', () => {
    const tree = shallowToJson(
      <MyPrioritiesList myPriorities={[]} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('matches snapshot with an array', () => {
    const tree = shallowToJson(
      <MyPrioritiesList myPriorities={prioritiesList} />
    )
    expect(tree).toMatchSnapshot()
  })
})
