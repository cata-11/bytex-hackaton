import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EventCard from "../../components/EventCard";

import { useContext } from "react";

import UserContext from "../../resources/context/UserContext";

const Feed = ({ title }) => {
  const userCtx = useContext(UserContext);
  const username = userCtx.getUsername();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Typography variant="h4">Welcome back,</Typography>
        <Typography variant="h4" fontWeight="600">
          {"@" + username}
        </Typography>
      </Box>
      <Box sx={{ marginTop: "35px", maxHeight: "70vh", overflowY: "auto" }}>
        <EventCard />
      </Box>
    </>
  );
};

export default Feed;
