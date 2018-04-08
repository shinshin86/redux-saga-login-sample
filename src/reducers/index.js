import { combineReducers } from 'redux'
import login from './login'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  login,
  router: routerReducer
})

export default rootReducer
