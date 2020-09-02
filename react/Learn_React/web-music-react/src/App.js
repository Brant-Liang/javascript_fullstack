import React, { memo } from 'react'

import { renderRoutes } from 'react-router-config'

import routes from './router'

import BLAppHeader from '@/components/app-header'
import BLAppFooter from '@/components/app-footer'
import { HashRouter } from 'react-router-dom'

export default memo(function App() {
  return (
    <HashRouter>
      <BLAppHeader />
      {renderRoutes(routes)}
      <BLAppFooter />
    </HashRouter>
  )
})
