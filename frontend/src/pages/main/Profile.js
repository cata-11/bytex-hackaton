import React from "react";
import PageLayout from "./PageLayout";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const Profile = () => {
  return (
    <PageLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "5vh",
        }}
      >
        <Avatar sx={{ height: "75px", width: "75px" }}>M</Avatar>
        <Typography mt="20px" sx={{ fontSize: "20px" }}>
          @ppinu17
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
          leo laoreet, congue mi sed, dictum enim. Duis dictum at nisl ac
          hendrerit. Cras at vehicula leo. Proin sed suscipit dolor, a auctor
          nulla.
        </Typography>
      </Box>
    </PageLayout>
  );
};

export default Profile;
