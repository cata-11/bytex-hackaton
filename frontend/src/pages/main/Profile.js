import React, { useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Events from '../../components/Events';

import UserContext from '../../resources/context/UserContext';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import UserLevel from './UserLevel';
import Friends from '../../components/Friends';
import { useContext } from 'react';
const axios = require('axios');

const Profile = () => {
  const [value, setValue] = React.useState(0);
  const [score, setScore] = React.useState(0);

  const userCtx = useContext(UserContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const username = userCtx.getUsername();
  const fullName = userCtx.getFullName();

  useEffect(() => {
    (async () => {
      await axios
        .get('http://localhost:5000/users/' + localStorage.getItem('username'))
        .then((res) => {
          console.log(res.data.user.score);
          setScore(res.data.user.score);
        });
    })();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '5vh',
        }}
      >
        <Avatar
          sx={{ height: '75px', width: '75px' }}
          src={'https://avatars.dicebear.com/api/personas/' + username + '.svg'}
        />
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
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Level" sx={{ textTransform: 'none' }} />
          <Tab label="Friends" sx={{ textTransform: 'none' }} />
          <Tab label="My Events" sx={{ textTransform: 'none' }} />
        </Tabs>
      </Box>
      {value === 0 && <UserLevel />}
      {value === 1 && <Friends />}
      {value === 2 && <Events />}
    </>
  );
};

export default Profile;
