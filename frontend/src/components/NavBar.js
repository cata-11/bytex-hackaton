import React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import IconButton from "@mui/material/IconButton";

import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import PersonIcon from "@mui/icons-material/Person";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { useNavigate, useLocation } from "react-router-dom";

import CreateEvent from "./CreateEvent";

const NavBar = () => {
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`${newValue}`);
  };

  //TODO: Fix rerendering while changing routes
  return (
    <>
      <BottomNavigation
        sx={{ width: "100%" }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Feed"
          value="/feed"
          icon={<DynamicFeedIcon />}
        />
        <BottomNavigationAction
          label="Scores"
          value="/scores"
          icon={<LeaderboardIcon />}
        />
        <IconButton onClick={handleOpen}>
          <AddLocationAltIcon />
        </IconButton>
        <BottomNavigationAction
          label="Memories"
          value="/memories"
          icon={<InsertPhotoIcon />}
        />
        <BottomNavigationAction
          label="Profile"
          value="/profile"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
      <CreateEvent handleClose={handleClose} open={open} />
    </>
  );
};

export default NavBar;
