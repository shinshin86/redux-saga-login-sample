import React from 'react'
import Header from './Header'
const Dashboard = ({ username }) => (
  <div>
    <Header />
    Hello! {username}
  </div>
)

export default Dashboard
