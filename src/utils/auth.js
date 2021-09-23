export const BASE_URL = 'https://register.nomoreparties.co';

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject("Error!" + res.statusText);
}

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => {
      return checkResponse(res);
    })
    .then((res) => {
      return res;
    })
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => {
      return checkResponse(res)
    })
    .then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token); // save token to the user's localStorage 
        return data; //return object with user data
      } else {
        return;
      }
    })
};

// Check token validity by sending a request to the endpoint /users/me
export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })
  .then((res) => {
    return checkResponse(res)
  })
  .then((data) => data);
};