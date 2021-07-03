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

export function successLogin(data) {
  return {
    type: SUCCESS_LOGIN,
    data,
  }
}

export function failureLogin(error) {
  return {
    type: FAILURE_LOGIN,
    error,
  }
}

export function requestLogout(data) {
  return {
    type: REQUEST_LOGOUT,
    data,
  }
}

export function successLogout(data) {
  return {
    type: SUCCESS_LOGOUT,
    data,
  }
}

export function failureLogout(error) {
  return {
    type: FAILURE_LOGOUT,
    error,
  }
}
