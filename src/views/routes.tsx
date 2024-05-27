import RootLayout from '@app/layout'
// import { lazy } from 'react'
import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom'

// const MainPage = lazy(async () => import('../pages/Main'));

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Navigate to='item' replace />} />
      <Route path='item' element={<div>About</div>} />
    </Route>,
  ),
)

export default router
