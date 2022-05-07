import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

import CreateEvent from "../../components/CreateEvent";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper sx={{ width: "100vw", height: "100vh" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
        maxWidth="xs"
      >
        <Button onClick={handleOpen} variant="contained">
          Create event
        </Button>
        <CreateEvent handleClose={handleClose} open={open} />
      </Container>
    </Paper>
  );
};

export default Home;
