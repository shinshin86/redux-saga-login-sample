import { take, put, call, fork } from 'redux-saga/effects'
import {
  REQUEST_LOGIN,
  REQUEST_LOGOUT,
  SUCCESS_LOGIN,
  successLogin,
  successLogout,
  failureLogin,
  failureLogout,
} from '../actions'
import { login, logout } from '../api/auth'
import history from '../history'

function* loginFlow() {
  yield fork(pageSaga)

  while (true) {
    const action = yield take(REQUEST_LOGIN)
    const { data, error } = yield call(login, action.data)

    if (data && !error) {
      yield put(successLogin(data))
    } else {
      yield put(failureLogin(error))
    }
  }
}

function* pageSaga() {
  while (true) {
    yield take(SUCCESS_LOGIN)

    yield call(history.push, '/dashboard')
  }
}

function* logoutFlow() {
  while (true) {
    const action = yield take(REQUEST_LOGOUT)
    const { data, error } = yield call(logout, action.data)

    if (data && !error) {
      yield put(successLogout(data))
    } else {
      yield put(failureLogout(error))
    }
  }
}

export default function* rootSaga() {
  yield fork(loginFlow)
  yield fork(logoutFlow)
}
