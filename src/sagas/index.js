import { take, put, call, fork } from 'redux-saga/effects'
import { REQUEST_LOGIN, REQUEST_LOGOUT, SUCCESS_LOGIN, FAILURE_LOGIN, successLogin } from '../actions'
import fetch from 'isomorphic-fetch'
import { login } from '../api/auth'
import { push } from 'react-router-redux'

export function* loginFlow() {
  while(true) {
    const action = yield take(REQUEST_LOGIN)
    const { usernmae, password } = action.data

    const { token, err } = yield call(login, action.data)

    if(err) {
      yield put({ type: FAILURE_LOGIN, payload: err })
      continue
    }
    yield put(successLogin(token))

    yield take(REQUEST_LOGOUT)

    yield call(SUCCESS_LOGOUT)
  }
}

function* pageSaga() {
  while(true) {
    yield take(SUCCESS_LOGIN)

    yield put(push('/list'))
  }
}

export default function* root() {
  yield fork(loginFlow)
  yield fork(pageSaga)
}
