import RootLayout from '@app/layout'
import fetchItemData from '@util/item/fetchItemData'
import { lazy } from 'react'
import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom'

// const MainPage = lazy(async () => import('../pages/Main'));
const ItemLayout = lazy(async () => import('../app/item/layout'))
const ItemPage = lazy(async () => import('../app/item/page'))

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Navigate to='item' replace />} />
      <Route path='item' element={<ItemLayout />}>
        <Route
          index
          loader={async ({ request }) => fetchItemData(request)}
          element={<ItemPage />}
        />
        <Route
          path=':category'
          loader={async ({ request }) => fetchItemData(request)}
          element={<ItemPage />}
        />
      </Route>
    </Route>,
  ),
)

export default router
