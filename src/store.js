import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import rootReducer from './reducers'
import rootSaga from './sagas'

const history = createHistory()

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    applyMiddleware(
      sagaMiddleware, routerMiddleware(history), createLogger()
    )
  )
  sagaMiddleware.run(rootSaga)
  return {store, history}
}
