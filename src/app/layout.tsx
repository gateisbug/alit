import { Outlet } from 'react-router-dom'

import GlobalHeader from '@app/(parallel)/global-header/page.tsx'

export default function RootLayout() {
  return (
    <div id='wrap'>
      <GlobalHeader />
      <Outlet />
    </div>
  )
}
