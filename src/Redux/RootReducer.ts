import {combineReducers} from 'redux'
import {authReducer} from './Authentication/Auth.redux'
export default combineReducers({
  auth: authReducer,
})
