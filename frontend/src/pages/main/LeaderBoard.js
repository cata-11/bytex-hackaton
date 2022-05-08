import * as React from 'react';
import List from '@mui/material/List';
import Button from '@mui/material/Button';

import BoardListItem from './BoardListItem';

import { useContext, useEffect, useState } from 'react';

import UserContext from '../../resources/context/UserContext';

const BASE_URL = 'http://localhost:5000';

export default function LeaderBoard() {
  const userCtx = useContext(UserContext);

  const userIsAuth = userCtx.isAuthenticated();
  let userId = null;
  if (userIsAuth) {
    userId = userCtx.getUserId();
  }

  const [loadedLeaderBoard, setLoadedLeaderBoard] = useState([]);

  const [filter, setFilter] = useState(false);
  const toggleFilter = (e) => {
    let btn = e.target.innerText;
    if (btn === 'ALL') {
      setFilter(false);
    } else {
      setFilter(true);
    }
  };

  useEffect(() => {
    if (!filter) {
      fetch(`${BASE_URL}/leaderboard`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((res) => res.json())
        .then((res) => {
          setLoadedLeaderBoard([...res.leaderboard.rows]);
          // console.log();
        });
    } else {
      console.log(userId);
      fetch(`${BASE_URL}/leaderboard/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setLoadedLeaderBoard([...res.users]);
        });
    }
  }, [filter, userId]);

  const listItems = loadedLeaderBoard.map((u) => (
    <BoardListItem key={u.id} user={u} />
  ));

  return (
    <>
      <Button color="secondary" onClick={toggleFilter} variant="contained">
        All
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
      <List>{listItems}</List>
    </>
  );
}
