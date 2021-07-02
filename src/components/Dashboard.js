import React from 'react'
import Header from './Header'
import moment from 'moment'
import { Box, CircularProgress } from '@material-ui/core'

const Dashboard = ({ username, loggedTime, loading, requestLogout }) => {
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
      <p>Hello! {username}</p>
      <p>Logged Time: {moment(loggedTime).format('YYYY/MM/DD hh:mm:ss')}</p>
      <button onClick={() => requestLogout({ username, loggedTime })}>
        Logout
      </button>
    </div>
  )
}

export default Dashboard
