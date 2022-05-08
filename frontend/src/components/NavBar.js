import React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import IconButton from "@mui/material/IconButton";

import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import PersonIcon from "@mui/icons-material/Person";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

import CreateEvent from "./CreateEvent";

const NavBar = ({ value, handleChange }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <BottomNavigation
        sx={{
          width: "350px",
          height: "50px",
          borderRadius: "15px",
          marginBottom: "10px",
          position: "fixed",
          top: "95%",
          left: "50%",
          marginTop: "-25px",
          marginLeft: "-175px",
        }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Feed"
          value="feed"
          icon={<DynamicFeedIcon />}
        />
        <BottomNavigationAction
          label="Scores"
          value="scores"
          icon={<LeaderboardIcon />}
        />
        <IconButton onClick={handleOpen}>
          <AddLocationAltIcon sx={{ fontSize: "40px", color: "#ff8552" }} />
        </IconButton>
        <BottomNavigationAction
          label="Memories"
          value="memories"
          icon={<InsertPhotoIcon />}
        />
        <BottomNavigationAction
          label="Profile"
          value="profile"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
      <CreateEvent handleClose={handleClose} open={open} />
    </>
  );
};

export default NavBar;
