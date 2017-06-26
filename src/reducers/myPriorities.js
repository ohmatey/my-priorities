import { ADD_PRIORITY, REMOVE_PRIORITY } from '../constants/'

import findPriority from './utils/findPriority'

export const myPrioritiesInitState = []

const myPriorities = (state = myPrioritiesInitState, action) => {
  switch (action.type) {
    case ADD_PRIORITY:
      const newPriority = findPriority(action.id)
      return [...state, newPriority]

    case REMOVE_PRIORITY:
      return state.filter(myPriority => myPriority.id !== action.id)

    default:
      return state
  }
}

export default myPriorities
