import React from "react";
import PageLayout from "./PageLayout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EventCard from "../../components/EventCard";

const Feed = () => {
  return (
    <PageLayout>
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
          ppinu17!
        </Typography>
      </Box>
      <Box sx={{ marginTop: "35px", maxHeight: "70vh", overflowY: "auto" }}>
        <EventCard />
      </Box>
    </PageLayout>
  );
};

export default Feed;
