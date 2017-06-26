import prioritiesReducer from './priorities'
import { prioritiesList } from '../data/'

describe('PrioritiesList component', () => {
  it('matches init snapshot', () => {
    const reducer = prioritiesReducer({}, { type: 'nothing' })

    expect(reducer).toMatchSnapshot()
  })

  it('matches snapshot with list of data', () => {
    const reducer = prioritiesReducer(prioritiesList, { type: 'nothing' })

    expect(reducer).toMatchSnapshot()
  })
})
