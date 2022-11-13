import '@babel/polyfill'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './components/App'
import Dashboard from './containers/Dashboard'
import Auth from './containers/Auth'
import configureStore from './store'
import { Route, Switch, Router } from 'react-router-dom'
import history from './history'

const { store } = configureStore()

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <Router history={history}>
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
    </Router>
  </Provider>
)
