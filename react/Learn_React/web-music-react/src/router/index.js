import React from 'react'
import { Redirect } from 'react-router-dom';

// import BLDiscover from '../pages/discover';
// import BLRecommend from '../pages/discover/c-pages/recommend';
// import BLRanking from '../pages/discover/c-pages/ranking';
// import BLSongs from '../pages/discover/c-pages/songs';
// import BLDjradio from '../pages/discover/c-pages/djradio';
// import BLArtist from '../pages/discover/c-pages/artist';
// import BLAlbum from '../pages/discover/c-pages/album';
// import BLMine from '../pages/mine';
// import BLFriend from '../pages/friend';
// import { Redirect } from 'react-router-dom';
const BLDiscover = React.lazy(_ => import('../pages/discover'));
const BLRecommend = React.lazy(_ => import('../pages/discover/c-pages/recommend'));
const BLRanking = React.lazy(_ => import('../pages/discover/c-pages/ranking'));
const BLSongs = React.lazy(_ => import('../pages/discover/c-pages/songs'));
const BLDjradio = React.lazy(_ => import('../pages/discover/c-pages/djradio'));
const BLArtist = React.lazy(_ => import('../pages/discover/c-pages/artist'));
const BLAlbum = React.lazy(_ => import('../pages/discover/c-pages/album'));
const BLMine = React.lazy(_ => import('../pages/mine'));
const BLFriend = React.lazy(_ => import('../pages/friend'));
const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to="/discover" />
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
          <Redirect to={"/discover/recommend"} />
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