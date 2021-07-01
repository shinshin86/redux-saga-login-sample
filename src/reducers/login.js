import {
  REQUEST_LOGIN,
  REQUEST_LOGOUT,
  SUCCESS_LOGIN,
  FAILURE_LOGIN,
  SUCCESS_LOGOUT,
  FAILURE_LOGOUT,
} from '../actions'

const initial = {
  data: {
    loggedIn: false,
    loggedTime: 0,
  },
}

export default function login(state = initial.data, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return state
    case REQUEST_LOGOUT:
      return state
    case SUCCESS_LOGIN:
      return {
        ...state,
        loggedIn: true,
        loggedTime: action.loginAt,
        token: action.token,
        username: action.username,
      }
    case FAILURE_LOGIN:
      return {
        ...state,
        loggedIn: false,
      }
    case SUCCESS_LOGOUT:
      return {
        ...state,
        loggedIn: false,
        loggedTime: 0,
        token: '',
        username: '',
      }
    case FAILURE_LOGOUT:
      return {
        ...state,
        loggedIn: false,
      }
    default:
      return state
  }
}
