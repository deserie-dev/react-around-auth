export const BASE_URL = 'https://register.nomoreparties.co';

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.error(error);
    });
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
    .then((response) => response.json())
    .then((data) => {
      if (data.jwt) {
        localStorage.setItem('jwt', data.jwt); // save token to the user's localStorage 
        return data; //return object with user data
      } else {
        return;
      }
    })
    .catch((error) => {
      console.error(error);
    });
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
  .then((res) => res.json())
  .then((data) => data);
};