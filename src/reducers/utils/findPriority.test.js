import findPriority from './findPriority'

describe('findPriority', () => {
  it('returns priority from id', () => {
    const foundPriority = findPriority(1)

    expect(foundPriority).toMatchSnapshot()
  })

  it('returns undefined with no id found', () => {
    const foundPriority = findPriority()

    expect(foundPriority).toMatchSnapshot()
  })
})
