import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'

class Login extends Component {
  render() {
    const { username } = this.props
    return (
      <div>
        <Dashboard username={username} />
      </div>
    )
  }
}

Login.propTypes = {
  username: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  const { username } = state.login
  return {
    username
  }
}

export default connect(mapStateToProps)(Login)
