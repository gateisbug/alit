import Loader from '@components/common/Loader'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export default function ItemLayout() {
  return (
    <main className='page item index'>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  )
}
