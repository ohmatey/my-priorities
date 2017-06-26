import { REMOVE_PRIORITY, ADD_PRIORITY } from '../constants/'

import { prioritiesList } from '../data/'
import findPriority from './utils/findPriority'

const priorities = (state = prioritiesList, action) => {
  switch (action.type) {
    case ADD_PRIORITY:
      return state.filter(priority => priority.id !== action.id)

    case REMOVE_PRIORITY:
      const newPriority = findPriority(action.id)
      return [...state, newPriority]

    default:
      return state
  }
}

export default priorities
