import GlobalHeader from '@app/@global-header/page.tsx'
import { Outlet } from 'react-router-dom'

export default function ItemLayout() {
  return (
    <>
      <GlobalHeader />
      <Outlet />
    </>
  )
}
