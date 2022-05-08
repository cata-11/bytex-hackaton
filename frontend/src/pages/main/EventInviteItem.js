import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const EventInviteItem = ({ event }) => {
  return (
    <ListItem
      alignItems="flex-start"
      sx={{
        width: '100%',
        borderRadius: '12px',
        backgroundColor: 'white',
        marginBottom: '.5rem'
      }}
    >
      <ListItemText
        sx={{ width: '100%' }}
        primary={event.inviter + ' has invited you to join ' + event.name}
        secondary={
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            <Box
              sx={{
                marginTop: '2px',
                opacity: '.5'
              }}
            >
              <Box>{'Name: ' + event.name}</Box>
              <Box>{'Location: ' + event.latitude + ' ' + event.longitude}</Box>
              <Box>{'Time: ' + event.date}</Box>
              <Box>{'Points: 100'}</Box>
            </Box>
          </Typography>
        }
      />
    </ListItem>
  );
};

export default EventInviteItem;
