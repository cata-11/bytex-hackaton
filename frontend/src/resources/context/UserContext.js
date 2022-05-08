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
  return (
    <UserContext.Provider
      value={{ isAuthenticated, authenticateUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
