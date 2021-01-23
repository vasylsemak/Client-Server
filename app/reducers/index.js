import { combineReducers } from 'redux'
import candiesReducer from './candiesReducer'

const rootReducer = combineReducers({
  candies: candiesReducer
})

export default rootReducer
