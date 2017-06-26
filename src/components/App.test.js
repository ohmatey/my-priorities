import React from 'react'
import { shallowToJson } from 'enzyme-to-json'

import App from './App'

describe('App component', () => {
  it('matches snapshot', () => {
    const tree = shallowToJson(
      <App />
    )
    expect(tree).toMatchSnapshot()
  })
})
