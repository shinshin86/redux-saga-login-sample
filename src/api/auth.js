export const login = ({ username, password }) => {
  // auth test
  // username: testuser
  // password: password
  const res = {
    token: '',
    err: '',
  }
  if (username === 'testuser' && password === 'password') {
    res.token = 'token'
    res.username = 'testuser'
  } else {
    res.err = 'auth error'
  }
  return res
}

export const logout = ({ username, loggedTime }) => {
  if (username === 'testuser') {
    console.log('loggedTime:', loggedTime)

    return { logoutAt: Date.now(), err: '' }
  } else {
    return { logoutAt: '', err: 'logout error' }
  }
}
