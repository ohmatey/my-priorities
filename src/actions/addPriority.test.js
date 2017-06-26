import { addPriorityById } from './'

describe('addPriorityById function', () => {
  it('matches snapshot with no id', () => {
    const addedPriorityWithNoId = addPriorityById()

    expect(addedPriorityWithNoId).toMatchSnapshot()
  })

  it('matches snapshot with id', () => {
    const addPriorityActionWithId = addPriorityById(1)

    expect(addPriorityActionWithId).toMatchSnapshot()
  })
})
