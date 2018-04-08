export const login = ({ username, password }) => {
  // auth test
  // username: testuser
  // password: password
  let res = {
    token: '',
    err: ''
  }
  if (username === 'testuser' && password === 'password') {
    res.token = 'token'
    res.username = 'testuser'
  } else {
    res.err = 'auth error'
  }
  return res
}
