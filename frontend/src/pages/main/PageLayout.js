import React from 'react';

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import NavBar from "../../components/NavBar";
import Box from "@mui/material/Box";

const PageLayout = ({ children }) => {
  return (
    <Paper sx={{ width: "100vw", height: "100vh", backgroundColor: "#f4f6fa" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
        maxWidth="xs"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            width: "100%",
            marginTop: "15px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              padding: "6px",
              width: "50px",
              minWidth: "initial",
              "&:hover": {
                backgroundColor: "#f5f7f6",
              },
            }}
          >
            <Badge badgeContent={4} color="primary">
              <NotificationsIcon sx={{ color: "#dbdce3" }} />
            </Badge>
          </Button>
        </Box>
        <Box sx={{ height: "100%", width: "100%" }}>{children}</Box>
        <NavBar />
      </Container>
    </Paper>
  );
};

export default PageLayout;
