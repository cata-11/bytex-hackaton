import * as React from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { List } from '@mui/material';
import PageLayout from './PageLayout';

import { useState } from 'react';

import EventInviteItem from './EventInviteItem';
import FriendReqItem from './FriendReqItem';

export default function Notifications() {
  const [filter, setFilter] = useState(false);
  const toggleFilter = (e) => {
    let btn = e.target.innerText;
    if (btn === 'INVITES') {
      setFilter(false);
    } else {
      setFilter(true);
    }
  };

  const events = [
    {
      id: '1',
      name: 'event 1',
      inviter: 'inviter 1',
      latitude: '10.00.00',
      longitude: '10.11.11'
    },
    {
      id: '2',
      name: 'event 2',
      inviter: 'inviter 2',
      latitude: '10.00.00',
      longitude: '10.11.11'
    },
    {
      id: '3',
      name: 'event 3',
      inviter: 'inviter 3',
      latitude: '10.00.00',
      longitude: '10.11.11'
    }
  ];

  const friends = [
    {
      id: '1',
      username: 'username 1',
      firstname: 'name',
      lastname: 'surname',
      score: '320'
    },
    {
      id: '2',
      username: 'username 2',
      firstname: 'name',
      lastname: 'surname',
      score: '100'
    },
    {
      id: '3',
      username: 'username 3',
      firstname: 'name',
      lastname: 'surname',
      score: '210'
    }
  ];

  const [loadedEvents, setLoadedEvents] = useState(events);
  const [loadedFriends, setLoadedFriends] = useState(friends);

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
          onClick={toggleFilter}
          variant={filter === true ? 'outlined' : 'contained'}
        >
          Invites
        </Button>
        <Button
          color="secondary"
          onClick={toggleFilter}
          variant={filter === false ? 'outlined' : 'contained'}
          sx={{
            marginLeft: '.5rem'
          }}
        >
          Friends
        </Button>
      </Box>
      {filter === true && <List>{eventsInviteList}</List>}
      {filter === false && <List>{friendsInviteList}</List>}
    </PageLayout>
  );
}
