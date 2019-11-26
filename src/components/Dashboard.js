import React from 'react'
import Header from './Header'
import moment from 'moment'

const Dashboard = ({ username, loggedTime }) => (
  <div>
    <Header />
    <p>Hello! {username}</p>
    <p>Logged Time: {moment(loggedTime).format('YYYY/MM/DD hh:mm:ss')}</p>
  </div>
)

export default Dashboard
