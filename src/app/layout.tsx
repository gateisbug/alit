import { lazy, Suspense } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Outlet } from 'react-router-dom'

import GlobalHeader from '@app/@global-header/page.tsx'

const ModalRoot = lazy(() => import('./@modal-root/layout.tsx'))
const SpeedDial = lazy(() => import('./@speed-dial/layout.tsx'))
const Fonts = lazy(() => import('./font.tsx'))

export default function RootLayout() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  // noinspection JSUnresolvedLibraryURL
  return (
    <>
      <div className='flex column h100'>
        <Suspense>
          <GlobalHeader />
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
      <Suspense>
        <Fonts />
      </Suspense>
    </>
  )
}
