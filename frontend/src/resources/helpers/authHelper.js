import axios from "axios";

const BASE_URL = ""; //TODO: Add url

//Here we'll store our helper functions for auth pages
export const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const registerUser = async (userInfo) => {
  const res = axios.post(`${BASE_URL}api/v1/users`, {
    email: userInfo.email,
    firstname: userInfo.firstName,
    lastname: userInfo.lastName,
    password: userInfo.password,
    username: "newUserTest",
  });

  if (res.status === 200) {
    return true;
  } else throw new Error("Something went wrong, please try again!");
};
