import React from 'react';
import PageLayout from './PageLayout';
import { Avatar, Typography, Box } from '@mui/material';

const Profile = () => {
  return (
    <PageLayout>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Avatar
          src="https://avatars.dicebear.com/api/personas/pinu.svg"
          style={{ width: '100px', height: '100px' }}
        />
        <Typography variant="h4">James Bond</Typography>
        <Typography style={{ fontSize: '17px' }}>@jamesbond</Typography>
      </Box>
    </PageLayout>
  );
};

export default Profile;
