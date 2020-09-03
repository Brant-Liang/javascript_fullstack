import React from 'react'
import BLDiscover from '../pages/discover';
import BLRecommend from '../pages/discover/c-pages/recommend';
import BLRanking from '../pages/discover/c-pages/ranking';
import BLSongs from '../pages/discover/c-pages/songs';
import BLDjradio from '../pages/discover/c-pages/djradio';
import BLArtist from '../pages/discover/c-pages/artist';
import BLAlbum from '../pages/discover/c-pages/album';
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
    path: "/discover",
    component: BLDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to={"/discover/recommend"}/>
        )
      },
      {
        path: "/discover/recommend",
        component: BLRecommend
      },
      {
        path: "/discover/ranking",
        component: BLRanking
      },
      {
        path: "/discover/songs",
        component: BLSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: BLDjradio
      },
      {
        path: "/discover/artist",
        component: BLArtist
      },
      {
        path: "/discover/album",
        component: BLAlbum
      },
      // {
      //   path: "/discover/player",
      //   component: BLPlayer
      // }
    ]
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