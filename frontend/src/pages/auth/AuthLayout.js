import React from "react";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  backdrop: {
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: "0px !important",
    boxShadow: "none !important",
  },
  mainCard: {
    height: "fit-content",
    padding: "20px",
    backgroundColor: "rgba(0,0,0,0.75) !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
  },
});

const AuthLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.backdrop}>
      <Container maxWidth="sm">
        <Fade in timeout={750}>
          <Card className={classes.mainCard}>
            <Box className={classes.contentContainer}>{children}</Box>
          </Card>
        </Fade>
      </Container>
    </Paper>
  );
};

export default AuthLayout;
