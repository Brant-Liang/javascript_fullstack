import React, { memo } from 'react';

import { discoverMenu } from '@/common/local-data';
import {
  DiscoverWrapper,
  TopMenu
} from './style';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

export default memo(function BLDiscover(props) {
  const { route } = props;
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu>
          {
            discoverMenu.map((item, index) => {
              return (
                <div key={item.title} className="item">
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      { renderRoutes(route.routes) }
    </DiscoverWrapper>
  )
})
