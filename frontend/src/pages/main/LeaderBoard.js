import React from "react";
import UserContext from "../../resources/context/UserContext";
import PageLayout from "./PageLayout";

const LeaderBoard = () => {
  const { isAuthenticated } = React.useContext(UserContext);

  return <PageLayout></PageLayout>;
};

export default LeaderBoard;
