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
    loginAt: 0,
    loading: false,
    error: '',
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
        loading: false,
        loginAt: action.data.loginAt,
        token: action.data.token,
        username: action.data.username,
        error: '',
      }
    case FAILURE_LOGIN:
      return {
        ...state,
        loggedIn: false,
        loading: false,
        error: action.error,
      }
    case SUCCESS_LOGOUT:
      return {
        ...state,
        loggedIn: false,
        loading: false,
        token: '',
        username: '',
        logoutAt: action.data.logoutAt,
        error: '',
      }
    case FAILURE_LOGOUT:
      return {
        ...state,
        loggedIn: false,
        loading: false,
        error: action.error,
      }
    default:
      return state
  }
}
