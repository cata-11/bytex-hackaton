import React from "react";

import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

const FriendChip = ({ username, handleDelete }) => {
  return (
    <Chip
      avatar={<Avatar>P</Avatar>}
      label={username}
      sx={{ margin: "2px" }}
      onDelete={() => handleDelete(username)}
    />
  );
};

export default FriendChip;
