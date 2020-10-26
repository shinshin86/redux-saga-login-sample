import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { requestLogin } from '../actions'
import { PropTypes } from 'prop-types'

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
})

class Login extends Component {
  state = {
    auth: {
      username: '',
      password: '',
    },
  }

  handleUsernameChange = (username) => (event) => {
    this.setState({
      auth: {
        username: event.target.value,
        password: this.state.auth.password,
      },
    })
  }

  handlePasswordChange = (password) => (event) => {
    this.setState({
      auth: {
        username: this.state.auth.username,
        password: event.target.value,
      },
    })
  }

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.dispatch(requestLogin(this.state.auth))
  }

  render() {
    return (
      <div>
        <Box textAlign="center">
          <Box>
            <TextField
              id="username"
              label="Username"
              className={styles.textField}
              value={this.state.auth.username}
              onChange={this.handleUsernameChange('username')}
              margin="normal"
            />
          </Box>
          <Box>
            <TextField
              type="password"
              id="password"
              label="Password"
              className={styles.textField}
              value={this.state.auth.password}
              onChange={this.handlePasswordChange('password')}
              margin="normal"
            />
          </Box>
          <Box mt={1}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleClick}
            >
              LOGIN
            </Button>
          </Box>
        </Box>
      </div>
    )
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default Login