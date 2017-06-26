import { removePriorityById } from './'

describe('removePriorityById function', () => {
  it('matches snapshot with no id', () => {
    const removedPriorityAction = removePriorityById()

    expect(removedPriorityAction).toMatchSnapshot()
  })

  it('matches snapshot with id', () => {
    const removedPriorityActionWithId = removePriorityById(1)

    expect(removedPriorityActionWithId).toMatchSnapshot()
  })
})
