import { lazy, Suspense, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Outlet } from 'react-router-dom'

import GlobalHeader from '@app/@global-header/page.tsx'
import IndexedItemDB from '@util/IndexedItemDB.ts'

const ModalRoot = lazy(() => import('./@modal-root/layout.tsx'))
const SpeedDial = lazy(() => import('./@speed-dial/page.tsx'))
const Fonts = lazy(() => import('./font.tsx'))

export default function RootLayout() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  useEffect(() => {
    IndexedItemDB.getInstance()
  }, [])

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
