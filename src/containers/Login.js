import { connect } from 'react-redux'
import Login from '../components/Login'

const mapStateToProps = (state) => {
  const { token } = state.login
  const loggedIn = !!token

  return {
    loggedIn,
  }
}

export default connect(mapStateToProps)(Login)
