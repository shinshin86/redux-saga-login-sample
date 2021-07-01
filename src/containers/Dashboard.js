import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { requestLogout } from '../actions'

const mapStateToProps = (state) => {
  const { username, loggedTime } = state.login
  return { username, loggedTime }
}
export default connect(mapStateToProps, { requestLogout })(Dashboard)
