import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

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

const Login = ({ requestLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <Box textAlign="center">
        <Box>
          <TextField
            id="username"
            label="Username"
            className={styles.textField}
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            margin="normal"
          />
        </Box>
        <Box>
          <TextField
            type="password"
            id="password"
            label="Password"
            className={styles.textField}
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            margin="normal"
          />
        </Box>
        <Box mt={1}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => requestLogin({ username, password })}
          >
            LOGIN
          </Button>
        </Box>
      </Box>
    </div>
  )
}

export default Login
