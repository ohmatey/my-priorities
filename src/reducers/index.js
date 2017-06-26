import { combineReducers } from 'redux'

import priorities from './priorities'
import myPriorities from './myPriorities'

const rootReducer = combineReducers({
  priorities,
  myPriorities
})

export default rootReducer
