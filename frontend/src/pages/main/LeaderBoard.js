import * as React from 'react';
import List from '@mui/material/List';
import PageLayout from './PageLayout';

import BoardListItem from './BoardListItem';

export default function LeaderBoard() {
  const users = [
    {
      id: '1',
      firstName: 'Name',
      lastName: 'Surname',
      username: 'username',
      score: 10
    },
    {
      id: '2',
      firstName: 'Name',
      lastName: 'Surname',
      username: 'username',
      score: 10
    },
    {
      id: '3',
      firstName: 'Name',
      lastName: 'Surname',
      username: 'username',
      score: 10
    }
  ];
  const ListItems = users.map((u) => <BoardListItem key={u.id} user={u} />);

  return (
    <PageLayout>
      <List>{ListItems}</List>
    </PageLayout>
  );
}
