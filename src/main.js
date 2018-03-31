import "@babel/polyfill"
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import Dashboard from './containers/Dashboard'
import Auth from './containers/Auth'
import configureStore from './store'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'


const {store, history} = configureStore()

render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Auth>
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </Auth>
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

