import { lazy } from 'react'
import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom'

import RootLayout from '@app/layout.tsx'
import fetchItemData from '@util/item/fetchItemData'

const ItemPage = lazy(async () => import('../app/item/page.tsx'))

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Navigate to='item' replace />} />
      <Route path='item'>
        <Route
          index
          loader={async ({ request }) => fetchItemData(request)}
          element={<ItemPage />}
        />
      </Route>
    </Route>,
  ),
)

export default router
