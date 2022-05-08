import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const FriendReqItem = ({ user }) => {
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
        primary={user.username + ' has sent a friend request'}
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
              <Box>{'Name: ' + user.firstname + ' ' + user.lastname}</Box>
              <Box>{'Score: ' + user.score}</Box>
            </Box>
          </Typography>
        }
      />
    </ListItem>
  );
};

export default FriendReqItem;
