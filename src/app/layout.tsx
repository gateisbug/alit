import { Outlet } from 'react-router-dom'
import {Suspense} from 'react';

export default function RootLayout() {
  return (
    <div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}
