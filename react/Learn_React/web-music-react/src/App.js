import React, { memo, Suspense } from 'react'

import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import routes from './router';
import store from './store'

import BLAppHeader from '@/components/app-header'
import BLAppFooter from '@/components/app-footer'
import { HashRouter } from 'react-router-dom'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <BLAppHeader />
        <Suspense fallback={<div>loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <BLAppFooter />
      </HashRouter>
    </Provider>
  )
})
