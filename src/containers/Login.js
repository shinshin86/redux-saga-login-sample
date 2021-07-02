import { connect } from 'react-redux'
import Login from '../components/Login'
import { requestLogin } from '../actions'

export default connect((state) => ({ loading: state.login.loading }), {
  requestLogin,
})(Login)
