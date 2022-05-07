import React from "react";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

import NavBar from "../../components/NavBar";
import Box from "@mui/material/Box";

const PageLayout = ({ children }) => {
  return (
    <Paper sx={{ width: "100vw", height: "100vh" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          height: "100%",
        }}
        maxWidth="xs"
      >
        <Box sx={{ height: "100%" }}>{children}</Box>
        <NavBar />
      </Container>
    </Paper>
  );
};

export default PageLayout;
