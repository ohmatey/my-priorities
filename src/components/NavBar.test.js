import React from 'react'
import { shallowToJson } from 'enzyme-to-json'

import NavBar from './NavBar'

describe('NavBar component', () => {
  it('matches snapshot', () => {
    const tree = shallowToJson(
      <NavBar />
    )
    expect(tree).toMatchSnapshot()
  })
})
