import { Outlet } from 'react-router-dom'

import GlobalHeader from '@app/@global-header/page.tsx'

export default function ItemLayout() {
  return (
    <>
      <GlobalHeader />
      <Outlet />
    </>
  )
}
