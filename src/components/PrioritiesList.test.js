import React from 'react'
import { shallowToJson } from 'enzyme-to-json'

import { PrioritiesList } from './PrioritiesList'
import { prioritiesList } from '../data/'

describe('PrioritiesList component', () => {
  it('matches snapshot', () => {
    const tree = shallowToJson(
      <PrioritiesList priorities={[]} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('matches snapshot with an array', () => {
    const tree = shallowToJson(
      <PrioritiesList priorities={prioritiesList} />
    )
    expect(tree).toMatchSnapshot()
  })
})
