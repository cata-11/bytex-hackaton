import * as React from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { List } from '@mui/material';
import PageLayout from './PageLayout';

import { useState, useEffect } from 'react';

import EventInviteItem from './EventInviteItem';
import FriendReqItem from './FriendReqItem';

const BASE_URL = 'http://localhost:5000';

export default function Notifications() {
  const [filter, setFilter] = useState('events');
  const toggleFilter = (e) => {
    setFilter(e);
  };

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    fetch(`${BASE_URL}/notif/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((res) => {
        setLoadedFriends(res.users);
        setLoadedEvents(res.events);
      });
  }, []);

  const [loadedEvents, setLoadedEvents] = useState([]);
  const [loadedFriends, setLoadedFriends] = useState([]);

  const eventsInviteList = loadedEvents.map((e) => (
    <EventInviteItem key={e.id} event={e} />
  ));

  const friendsInviteList = loadedFriends.map((f) => (
    <FriendReqItem key={f.id} user={f} />
  ));

  return (
    <PageLayout title="Notifications">
      <Box sx={{ marginBottom: '1rem' }}>
        <Button
          color="secondary"
          onClick={() => toggleFilter('events')}
          variant={filter === 'friends' ? 'outlined' : 'contained'}
        >
          Invites
        </Button>
        <Button
          color="secondary"
          onClick={() => toggleFilter('friends')}
          variant={filter === 'events' ? 'outlined' : 'contained'}
          sx={{
            marginLeft: '.5rem'
          }}
        >
          Friends
        </Button>
      </Box>
      {filter === 'events' && <List>{eventsInviteList}</List>}
      {filter === 'friends' && <List>{friendsInviteList}</List>}
    </PageLayout>
  );
}
