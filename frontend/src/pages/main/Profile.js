import React from "react";
import PageLayout from "./PageLayout";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

import UserContext from "../../resources/context/UserContext";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import UserLevel from "./UserLevel";
import { useContext } from "react";

const Profile = () => {
  const [value, setValue] = React.useState(0);
  const userCtx = useContext(UserContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const userIsAuth = userCtx.isAuthenticated();

  let username = "";
  let score = 0;
  let fullName = "";
  if (userIsAuth) {
    username = userCtx.getUsername();
    score = userCtx.getScore();
    fullName = userCtx.getFullName();
  }

  return (
    <PageLayout title="Profile">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "5vh",
        }}
      >
        <Avatar sx={{ height: "75px", width: "75px" }}>M</Avatar>
        <Typography mt="20px" sx={{ fontSize: "25px" }}>
          {fullName}
        </Typography>
        <Typography mt="2px" sx={{ fontSize: "15px" }}>
          {"@" + username}
        </Typography>
        <Typography mt="10px" sx={{ fontSize: "20px" }}>
          {"Score: " + score}
        </Typography>
      </Box>
      <Divider sx={{ marginTop: "20px" }} />
      <Box sx={{ width: "100%" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Level" sx={{ textTransform: "none" }} />
          <Tab label="Friends" sx={{ textTransform: "none" }} />
        </Tabs>
      </Box>
      {value === 0 && <UserLevel />}
    </PageLayout>
  );
};

export default Profile;
