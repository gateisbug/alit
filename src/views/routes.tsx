import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom'

import RootLayout from '@app/layout.tsx'
import RootPage from '@app/page.tsx'

const routes = createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index element={<RootPage />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Route>,
)

const router = createMemoryRouter(routes, {
  basename: '/',
})

export default router
