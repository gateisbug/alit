import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom'

import RootLayout from '@app/layout.tsx'
import { lazy } from 'react'

const ItemPage = lazy(async () => import('../app/item/page.tsx'))

const routes = createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index element={<Navigate to='item' replace />} />
    <Route path='item'>
      <Route
        index
        // loader={}
        element={<ItemPage />}
      />
    </Route>
  </Route>,
)

const router = createHashRouter(routes, {
  basename: '/',
})

export default router
