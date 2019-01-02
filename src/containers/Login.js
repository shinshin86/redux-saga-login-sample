import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { requestLogin } from '../actions'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
})

class Login extends Component {
  state = {
    auth: {
      username: '',
      password: ''
    }
  }

  handleUsernameChange = username => event => {
    this.setState({
      auth: {
        username: event.target.value,
        password: this.state.auth.password
      }
    })
  }

  handlePasswordChange = password => event => {
    this.setState({
      auth: {
        username: this.state.auth.username,
        password: event.target.value
      }
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
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <TextField
              id="username"
              label="Username"
              className={styles.textField}
              value={this.state.auth.username}
              onChange={this.handleUsernameChange('username')}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              id="password"
              label="Password"
              className={styles.textField}
              value={this.state.auth.password}
              onChange={this.handlePasswordChange('password')}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleClick}
            >
              LOGIN
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { token } = state.login
  const loggedIn = !!token

  return {
    loggedIn
  }
}

export default connect(mapStateToProps)(Login)
