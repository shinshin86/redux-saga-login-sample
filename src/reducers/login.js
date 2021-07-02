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
    loading: false,
  },
}

export default function login(state = initial.data, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        loading: true,
      }
    case REQUEST_LOGOUT:
      return {
        ...state,
        loading: true,
      }
    case SUCCESS_LOGIN:
      return {
        ...state,
        loggedIn: true,
        loggedTime: action.loginAt,
        token: action.token,
        username: action.username,
        loading: false,
      }
    case FAILURE_LOGIN:
      return {
        ...state,
        loggedIn: false,
        loading: false,
      }
    case SUCCESS_LOGOUT:
      return {
        ...state,
        loggedIn: false,
        loggedTime: 0,
        token: '',
        username: '',
        loading: false,
      }
    case FAILURE_LOGOUT:
      return {
        ...state,
        loggedIn: false,
        loading: false,
      }
    default:
      return state
  }
}
