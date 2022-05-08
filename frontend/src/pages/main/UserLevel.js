import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LevelBar from "./LevelBar";
import LevelPerks from "./LevelPerks";

import badge1 from "../../assets/badge1.png";
import badge2 from "../../assets/badge2.png";
import badge3 from "../../assets/badge3.png";
import badge4 from "../../assets/badge4.png";

const UserLevel = () => {
  return (
    <Box sx={{ width: "100%", marginTop: "20px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <img src={badge3} height="100px" width="100px" alt="badge" />
        <img src={badge1} height="100px" width="100px" alt="badge" />
        <img src={badge2} height="100px" width="80px" alt="badge" />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginTop: "15px",
          }}
        >
          <img src={badge4} height="100px" width="100px" alt="badge" />
          <img src={badge4} height="100px" width="100px" alt="badge" />
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Typography mt="20px" fontSize="25px">
          You are currently at
        </Typography>
        <Typography mt="20px" fontSize="25px" ml="10px" fontWeight={600}>
          {` level 5!`}
        </Typography>
      </Box>
      <Typography>Earn 340 points to level up.</Typography>
      <LevelBar value={60} variant="determinate" sx={{ marginTop: "10px" }} />
      <Box sx={{ marginTop: "20px" }}>
        <LevelPerks />
      </Box>
    </Box>
  );
};

export default UserLevel;
