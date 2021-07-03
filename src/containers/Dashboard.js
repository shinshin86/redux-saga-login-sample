import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { requestLogout } from '../actions'

const mapStateToProps = (state) => {
  const { username, loginAt, loading } = state.login
  return { username, loginAt, loading }
}
export default connect(mapStateToProps, { requestLogout })(Dashboard)
