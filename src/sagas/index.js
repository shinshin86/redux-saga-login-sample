import { take, put, call, fork } from 'redux-saga/effects'
import {
  REQUEST_LOGIN,
  REQUEST_LOGOUT,
  SUCCESS_LOGIN,
  FAILURE_LOGIN,
  successLogin,
} from '../actions'
import { login } from '../api/auth'
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

    yield take(REQUEST_LOGOUT)

    // yield call(SUCCESS_LOGOUT)
  }
}

function* pageSaga() {
  while (true) {
    yield take(SUCCESS_LOGIN)

    yield call(history.push,'/dashboard')
  }
}

export default function* root() {
  yield fork(loginFlow)
  yield fork(pageSaga)
}
