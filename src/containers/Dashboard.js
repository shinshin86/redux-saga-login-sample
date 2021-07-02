import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { requestLogout } from '../actions'

const mapStateToProps = (state) => {
  const { username, loggedTime, loading } = state.login
  return { username, loggedTime, loading }
}
export default connect(mapStateToProps, { requestLogout })(Dashboard)
