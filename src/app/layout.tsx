import { lazy, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import GlobalHeader from './@global-header/page.tsx'

const ModalRoot = lazy(() => import('./@modal-root/page.tsx'))

export default function RootLayout() {
  return (
    <div className='flex column h100'>
      <GlobalHeader />
      <Suspense>
        <Outlet />
      </Suspense>
      <Suspense>
        <ModalRoot />
      </Suspense>
    </div>
  )
}
