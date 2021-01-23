import { combineReducers } from 'redux'
import candiesReducer from './candiesReducer'
import oneCandyReducer from './oneCandy-reducer'

const rootReducer = combineReducers({
  candies: candiesReducer,
  oneCandy: oneCandyReducer
})

export default rootReducer
