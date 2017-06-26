import myPrioritiesReducer, { myPrioritiesInitState } from './myPriorities'

describe('PrioritiesList component', () => {
  it('matches init snapshot', () => {
    const reducer = myPrioritiesReducer(myPrioritiesInitState, { type: 'nothing' })

    expect(reducer).toMatchSnapshot()
  })
})
