import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'

const Auth = ({ loggedIn, children }) => {
  return loggedIn ? <Route>{children}</Route> : <Redirect to="/" />
}

const mapStateToProps = state => ({
  loggedIn: state.login.loggedIn
})

export default withRouter(connect(mapStateToProps)(Auth))
