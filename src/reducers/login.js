import {
  REQUEST_LOGIN,
  REQUEST_LOGOUT,
  SUCCESS_LOGIN,
  FAILURE_LOGIN
} from '../actions'

const initial = {
  data: {
    loggedIn: false,
    loggedTime: 0
  }
}

export default function login(state = initial.data, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return state
    case REQUEST_LOGOUT:
      return {
        ...state,
        loggedIn: false
      }
    case SUCCESS_LOGIN:
      console.log(action)
      return {
        ...state,
        loggedIn: true,
        loggedTime: action.loginAt,
        token: action.token,
        username: action.username
      }
    case FAILURE_LOGIN:
      return {
        ...state,
        loggedIn: false
      }
    default:
      return state
  }
}
