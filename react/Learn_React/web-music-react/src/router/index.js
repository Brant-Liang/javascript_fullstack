import React from 'react'
import BLDiscover from '../pages/discover';
import BLMine from '../pages/mine';
import BLFriend from '../pages/friend';
import { Redirect } from 'react-router-dom';
const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to="/discover"/>
    )
  },
  {
    path: '/discover',
    component: BLDiscover
  },
  {
    path: '/mine',
    component: BLMine
  },
  {
    path: '/friend',
    component: BLFriend
  }
];

export default routes;