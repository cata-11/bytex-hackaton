import React, { useState } from 'react';
import PageLayout from './PageLayout';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import UserContext from '../../resources/context/UserContext';

import { useContext } from 'react';
import { Button } from '@mui/material';

import Badges from '../../components/Badges';
import Friends from '../../components/Friends';
import AddFriend from '../../components/AddFriend';

const Profile = () => {
  const userCtx = useContext(UserContext);

  const userIsAuth = userCtx.isAuthenticated();

  let username = '';
  let score = 0;
  let fullName = '';
  if (userIsAuth) {
    username = userCtx.getUsername();
    score = userCtx.getScore();
    fullName = userCtx.getFullName();
  }

  const [componentName, setComponent] = useState('badges');

  return (
    <PageLayout title="Profile">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '5vh'
        }}
      >
        <Avatar sx={{ height: '75px', width: '75px' }}>M</Avatar>
        <Typography mt="20px" sx={{ fontSize: '25px' }}>
          {fullName}
        </Typography>
        <Typography mt="2px" sx={{ fontSize: '15px' }}>
          {'@' + username}
        </Typography>
        <Typography mt="10px" sx={{ fontSize: '20px' }}>
          {'Score: ' + score}
        </Typography>
      </Box>
      <Divider sx={{ marginTop: '20px' }} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px'
        }}
      >
        <Button
          variant={componentName === 'badges' ? 'outlined' : ''}
          onClick={() => setComponent('badges')}
        >
          Badges
        </Button>
        <Button
          variant={componentName === 'add' ? 'outlined' : ''}
          onClick={() => setComponent('add')}
        >
          Add Friend
        </Button>
        <Button
          variant={componentName === 'friends' ? 'outlined' : ''}
          onClick={() => setComponent('friends')}
        >
          Friends
        </Button>
      </Box>
      <Box>{componentName === 'badges' && <Badges />}</Box>
      <Box>{componentName === 'add' && <AddFriend />}</Box>
      <Box>{componentName === 'friends' && <Friends />}</Box>
    </PageLayout>
  );
};

export default Profile;
