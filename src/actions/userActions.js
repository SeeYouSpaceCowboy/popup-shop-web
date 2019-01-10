const baseUrl = 'http://localhost:3005/api/v1'

export const fetchUser = () => {
  const response = true

  return {
    type: 'SET_USER',
    payload: response
  }
}

export const login = (user, callback) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }

  return dispatch => {
    fetch(`${ baseUrl }/login`, data)
      .then(res => res.json())
      .then(user => {
        sessionStorage.setItem('userId', user._id)

        dispatch({
          type: 'SET_USER',
          payload: user
        })

        callback()
      })
  }
}

export const signup = credentionals => {
  const response = true

  return {
    type: 'SET_USER',
    payload: response
  }
}
