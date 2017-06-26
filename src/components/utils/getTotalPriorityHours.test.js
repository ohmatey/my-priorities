import getTotalPriorityHours from './getTotalPriorityHours'
import { prioritiesList } from '../../data/'

describe('getTotalPriorityHours function', () => {
  it('matches snapshot with empty array', () => {
    const totalHours = getTotalPriorityHours([])

    expect(totalHours).toMatchSnapshot()
  })

  it('matches snapshot with array', () => {
    const totalHours = getTotalPriorityHours(prioritiesList)

    expect(totalHours).toMatchSnapshot()
  })
})
