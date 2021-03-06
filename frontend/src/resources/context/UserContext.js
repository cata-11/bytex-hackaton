import { createContext } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const authenticateUser = () => {
    localStorage.setItem("isAuthenticated", true);
  };
  const logoutUser = () => {
    localStorage.setItem("isAuthenticated", false);
  };
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const getUserId = () => localStorage.getItem("userId");
  const getUsername = () => localStorage.getItem("username");
  const getScore = () => localStorage.getItem("score");
  const getFullName = () => {
    let name = localStorage.getItem("firstName");
    let surname = localStorage.getItem("lastName");
    return name + " " + surname;
  };

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        authenticateUser,
        logoutUser,
        getUserId,
        getUsername,
        getScore,
        getFullName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
