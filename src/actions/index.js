import * as constants from '../constants/'

export const addPriorityById = id => ({
  type: constants.ADD_PRIORITY,
  id
})

export const removePriorityById = id => ({
  type: constants.REMOVE_PRIORITY,
  id
})
