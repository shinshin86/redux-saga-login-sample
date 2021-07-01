import { take, put, call, fork } from 'redux-saga/effects'
import {
  REQUEST_LOGIN,
  REQUEST_LOGOUT,
  SUCCESS_LOGIN,
  FAILURE_LOGIN,
  FAILURE_LOGOUT,
  successLogin,
  successLogout,
} from '../actions'
import { login, logout } from '../api/auth'
import history from '../history'

export function* loginFlow() {
  while (true) {
    const action = yield take(REQUEST_LOGIN)
    const { token, username, err } = yield call(login, action.data)

    if (err) {
      yield put({ type: FAILURE_LOGIN, payload: err })
      continue
    }
    yield put(successLogin(token, username))
  }
}

export function* logoutFlow() {
  while (true) {
    const action = yield take(REQUEST_LOGOUT)
    const { logoutAt, err } = yield call(logout, action.data)

    if (err) {
      yield put({ type: FAILURE_LOGOUT, payload: err })
      continue
    }
    yield put(successLogout(logoutAt))
  }
}

function* pageSaga() {
  while (true) {
    yield take(SUCCESS_LOGIN)

    yield call(history.push, '/dashboard')
  }
}

export default function* root() {
  yield fork(loginFlow)
  yield fork(pageSaga)
  yield fork(logoutFlow)
}
