import {combineReducers} from 'redux'
import add from './addReducer'

const rootReducer = combineReducers({
  add,
})

export default rootReducer