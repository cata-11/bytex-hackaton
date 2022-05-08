import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const LevelPerks = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Level 5 Perks</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          - Access to private events
          <br /> - Invite up to 2 friends to a private event
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default LevelPerks;
