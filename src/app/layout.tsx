import { lazy, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const ModalRoot = lazy(() => import('./@modal-root/layout.tsx'))

export default function RootLayout() {
  return (
    <div className='flex column h100'>
      <Suspense>
        <Outlet />
      </Suspense>
      <Suspense>
        <ModalRoot />
      </Suspense>
    </div>
  )
}
