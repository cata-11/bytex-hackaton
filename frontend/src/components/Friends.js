import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useContext, useEffect, useState } from 'react';

import UserContext from '../resources/context/UserContext';

import BoardListItem from '../pages/main/BoardListItem';

export default function Friends() {
  const userCtx = useContext(UserContext);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    (async () => {
      await fetch('http://localhost:5000/friends/' + userCtx.getUserId())
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setFriends(res.users);
        });
    })();
  }, []);

  return (
    <Box sx={{ width: '100%', marginTop: '20px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {friends.map((friend) => (
          <BoardListItem key={friend.id} user={friend} />
        ))}
      </Box>
    </Box>
  );
}
