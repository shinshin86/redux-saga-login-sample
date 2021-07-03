import { take, put, call, fork } from 'redux-saga/effects'
import {
  REQUEST_LOGIN,
  REQUEST_LOGOUT,
  SUCCESS_LOGIN,
  FAILURE_LOGIN,
  SUCCESS_LOGOUT,
  FAILURE_LOGOUT,
} from '../actions'
import { login, logout } from '../api/auth'
import history from '../history'

function* authFlow() {
  while (true) {
    const { data: requestLoginData } = yield take(REQUEST_LOGIN)
    const { data: loginData, error: loginError } = yield call(
      login,
      requestLoginData
    )

    if (!loginData || loginError) {
      yield put({ type: FAILURE_LOGIN, error: loginError })
      continue
    }

    yield put({ type: SUCCESS_LOGIN, data: loginData })

    yield call(history.push, '/dashboard')

    const { data: requestLogoutData } = yield take(REQUEST_LOGOUT)
    const { data: logoutData, logoutError } = yield call(
      logout,
      requestLogoutData
    )

    if (!logoutData || logoutError) {
      yield put({ type: FAILURE_LOGOUT, error: logoutError })
      continue
    }

    yield put({ type: SUCCESS_LOGOUT, data: logoutData })
  }
}

export default function* rootSaga() {
  yield fork(authFlow)
}
