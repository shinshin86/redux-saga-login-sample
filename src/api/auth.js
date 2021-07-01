const sleep = (msec) => new Promise((resolve) => setTimeout(resolve, msec))

export const login = async ({ username, password }) => {
  // API access
  await sleep(3000)

  // auth test
  // username: testuser
  // password: password
  if (username === 'testuser' && password === 'password') {
    return {
      token: 'token',
      username,
    }
  } else {
    return {
      err: 'auth error',
    }
  }
}

export const logout = async ({ username, loggedTime }) => {
  // API access
  await sleep(1000)

  if (username === 'testuser') {
    console.log('loggedTime:', loggedTime)

    return { logoutAt: Date.now(), err: '' }
  } else {
    return { logoutAt: '', err: 'logout error' }
  }
}
