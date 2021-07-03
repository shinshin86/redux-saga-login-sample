import React from 'react'
import Header from './Header'
import moment from 'moment'
import { Box, Button, CircularProgress } from '@material-ui/core'

const Dashboard = ({ username, loginAt, loading, requestLogout }) => {
  if (loading)
    return (
      <div>
        <Header />
        <Box textAlign="center" mt={3}>
          <CircularProgress />
        </Box>
      </div>
    )

  return (
    <div>
      <Header />
      <Box textAlign="center">
        <p>Hello! {username}</p>
        <p>Logged Time: {moment(loginAt).format('YYYY/MM/DD hh:mm:ss')}</p>
        <Button
          variant="contained"
          color="primary"
          onClick={() => requestLogout({ username, loginAt })}
        >
          LOGOUT
        </Button>
      </Box>
    </div>
  )
}

export default Dashboard
