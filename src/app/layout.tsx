import { lazy, Suspense } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Outlet } from 'react-router-dom'

const ModalRoot = lazy(() => import('./@modal-root/layout.tsx'))
const SpeedDial = lazy(() => import('./@speed-dial/layout.tsx'))

export default function RootLayout() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <div className='flex column h100'>
      <Suspense>
        <Outlet />
      </Suspense>
      {isTabletOrMobile && (
        <Suspense>
          <SpeedDial />
        </Suspense>
      )}
      <Suspense>
        <ModalRoot />
      </Suspense>
    </div>
  )
}
