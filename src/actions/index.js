export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'
export const FAILURE_LOGIN = 'FAILURE_LOGIN'
export const SUCCESS_LOGOUT = 'SUCCESS_LOGOUT'
export const FAILURE_LOGOUT = 'FAILURE_LOGOUT'

export function requestLogin(data) {
  return {
    type: REQUEST_LOGIN,
    data,
  }
}

export function requestLogout(data) {
  return {
    type: REQUEST_LOGOUT,
    data,
  }
}

export function successLogout(logoutAt) {
  return {
    type: SUCCESS_LOGOUT,
    logoutAt,
  }
}

export function successLogin(token, username) {
  return {
    type: SUCCESS_LOGIN,
    token,
    username,
    loginAt: Date.now(),
  }
}

export function failureLogin() {
  return {
    type: FAILURE_LOGIN,
  }
}
