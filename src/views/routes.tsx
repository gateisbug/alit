import { lazy } from 'react'
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom'

import RootLayout from '@app/layout.tsx'

const ItemLayout = lazy(async () => import('../app/item/layout.tsx'))
const ItemPage = lazy(async () => import('../app/item/page.tsx'))
const CharacterLayout = lazy(async () => import('../app/character/layout.tsx'))
const CharacterPage = lazy(async () => import('../app/character/page.tsx'))

const routes = createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index element={<Navigate to='item' replace />} />
    <Route path='item' element={<ItemLayout />}>
      <Route index element={<ItemPage />} />
    </Route>
    <Route path='character' element={<CharacterLayout />}>
      <Route index element={<CharacterPage />} />
    </Route>
    <Route path='*' element={<Navigate to='item' replace />} />
  </Route>,
)

const router = createHashRouter(routes, {
  basename: '/',
})

export default router
