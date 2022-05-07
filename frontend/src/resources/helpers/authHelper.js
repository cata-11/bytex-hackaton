const BASE_URL = 'http://localhost:5000';

export const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const signupUser = async (userInfo) => {
  console.log(userInfo);

  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: userInfo.email,
      password: userInfo.password,
      username: userInfo.username,
      firstname: userInfo.firstName,
      lastname: userInfo.lastName
    })
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      // console.log(res);
      return res;
    });
};

export const loginUser = async (userInfo) => {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: userInfo.email,
      password: userInfo.password
    })
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
};
