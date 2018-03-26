export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'
export const FAILURE_LOGIN = 'FAILURE_LOGIN'


export function requestLogin(data) {
  return {
    type: REQUEST_LOGIN,
    data,
  }
}

export function requestLogout() {
  return {
    type: REQUEST_LOGOUT,
  }
}

export function successLogin(token) {
  return {
    type: SUCCESS_LOGIN,
    token,
    loginAt: Date.now(),
  }
}

export function failureLogin() {
  return {
    type: FAILURE_LOGIN,
  }
}

