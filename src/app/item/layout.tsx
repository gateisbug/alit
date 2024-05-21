import { ReactNode, Suspense } from 'react'

import { CircularProgress } from '@ui'

export default function ItemLayout({ children }: { children: ReactNode }) {
  // return <main className='header-adder'>{children}</main>
  return (
    <main className='header-adder'>
      <div className='page item index'>
        <Suspense fallback={<CircularProgress />}>{children}</Suspense>
      </div>
    </main>
  )
}
