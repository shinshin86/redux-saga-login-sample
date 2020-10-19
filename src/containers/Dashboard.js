import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'

function mapStateToProps(state) {
  const { username, loggedTime } = state.login
  return {
    username,
    loggedTime,
  }
}

export default connect(mapStateToProps)(Dashboard)
