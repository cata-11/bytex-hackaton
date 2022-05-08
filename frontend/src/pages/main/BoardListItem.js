import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const BoardListItem = ({ user }) => {
  return (
    <>
      <ListItem
        alignItems="flex-start"
        sx={{
          width: '100%',
          borderRadius: '12px',
          backgroundColor: 'white',
          marginBottom: '.5rem',
        }}
      >
        <ListItemAvatar>
          <Avatar
            sx={{ width: 60, height: 60, marginRight: '1rem' }}
            alt="avatar"
            src={
              'https://avatars.dicebear.com/api/personas/' +
              user.username +
              '.svg'
            }
          />
        </ListItemAvatar>
        <ListItemText
          sx={{ width: '100%' }}
          primary={user.firstname + ' ' + user.lastname}
          secondary={
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              <Box
                sx={{
                  marginTop: '-2px',
                  marginLeft: '-1px',
                  marginBottom: '2px',
                  opacity: '.5',
                }}
              >
                {'@' + user.username}
              </Box>
              <Box sx={{ width: '100%', display: 'flex' }}>
                {'Points: ' + user.score}
              </Box>
            </Typography>
          }
        />
      </ListItem>
    </>
  );
};

export default BoardListItem;
