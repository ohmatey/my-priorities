import React from 'react'
import { shallowToJson } from 'enzyme-to-json'

import { MyPrioritiesStats } from './MyPrioritiesStats'

describe('MyPrioritiesList component', () => {
  it('matches snapshot', () => {
    const tree = shallowToJson(
      <MyPrioritiesStats />
    )
    expect(tree).toMatchSnapshot()
  })

  it('matches snapshot with props', () => {
    const tree = shallowToJson(
      <MyPrioritiesStats totalHours={10} tallyOfPriorities={2} timeLeftInDay={12} />
    )
    expect(tree).toMatchSnapshot()
  })
})
