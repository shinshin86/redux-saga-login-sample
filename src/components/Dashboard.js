import React from 'react'
import Header from './Header'
import moment from 'moment'

const Dashboard = ({ username, loggedTime, requestLogout }) => (
  <div>
    <Header />
    <p>Hello! {username}</p>
    <p>Logged Time: {moment(loggedTime).format('YYYY/MM/DD hh:mm:ss')}</p>
    <button onClick={() => requestLogout({ username, loggedTime })}>
      Logout
    </button>
  </div>
)

export default Dashboard
