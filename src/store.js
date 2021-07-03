import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import rootSaga from './sagas'
// import rootSaga from './sagas/index2'
import history from './history'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, createLogger())
  )

  sagaMiddleware.run(rootSaga, { history })
  return { store }
}
