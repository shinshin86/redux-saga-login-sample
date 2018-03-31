import "@babel/polyfill"
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import Dashboard from './containers/Dashboard'
import configureStore from './store'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'


const {store, history} = configureStore()

render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <div>
        <Route exact path="/" component={App} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

