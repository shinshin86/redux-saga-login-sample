import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import Dashboard from './containers/Dashboard'
import Auth from './containers/Auth'
import configureStore from './store'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

const { store } = configureStore()

render(
  <Provider store={store}>
    <Router>
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
  </Provider>,
  document.getElementById('root')
)
