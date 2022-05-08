import React from 'react';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import NavBar from '../../components/NavBar';
import Box from '@mui/material/Box';
import Notifications from './Notifications';
import { Typography } from '@mui/material';

import Feed from './Feed';
import Memories from './Memories';
import LeaderBoard from './LeaderBoard';
import Profile from './Profile';
import { useNavigate } from 'react-router-dom';

const PageLayout = ({ title }) => {
  const [value, setValue] = React.useState('feed');
  const [notification, setNotification] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setNotification(false);
  };

  const goToNotifications = () => {
    setValue(0);
    setNotification(true);
  };

  console.log(notification);
  return (
    <Paper sx={{ width: '100vw', height: '100vh', backgroundColor: '#f4f6fa' }}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
        maxWidth="xs"
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            margin: '15px 0',
            backgroundColor: '#ffffff',
            padding: '5px',
            borderRadius: '9px',
          }}
        >
          <Typography
            sx={{
              fontSize: '1.5rem',
            }}
          >
            {value === 'scores' && 'Leaderboard'}
            {value === 'feed' && 'Feed'}
            {value === 'memories' && 'Memories'}
            {value === 'profile' && 'Profile'}
          </Typography>
          <Button
            onClick={goToNotifications}
            variant="contained"
            sx={{
              backgroundColor: '#fff',
              padding: '6px',
              width: '50px',
              minWidth: 'initial',
              '&:hover': {
                backgroundColor: '#f5f7f6',
              },
            }}
          >
            <Badge badgeContent={4} color="primary">
              <NotificationsIcon sx={{ color: '#dbdce3' }} />
            </Badge>
          </Button>
        </Box>
        <Box sx={{ height: '100%', width: '100%' }}>
          {value === 'feed' && <Feed />}
          {value === 'scores' && <LeaderBoard />}
          {value === 'memories' && <Memories />}
          {value === 'profile' && <Profile />}
          {notification && <Notifications />}
        </Box>
        <NavBar value={value} handleChange={handleChange} />
      </Container>
    </Paper>
  );
};

export default PageLayout;
