import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const EventInviteItem = ({ event }) => {
  return (
    <ListItem
      sx={{
        width: '100%',
        borderRadius: '12px',
        backgroundColor: 'white',
        marginBottom: '.5rem',
        display: 'flex',
        flexDirection: 'column'
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
      <Box sx={{ alignSelf: 'end' }}>
        <Button color="error">Decline</Button>
        <Button color="secondary">Accept</Button>
      </Box>
    </ListItem>
  );
};

export default EventInviteItem;
