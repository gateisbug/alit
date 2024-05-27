import AppBar from '@app/(main)/appbar';
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <>
      {/* <header>header area</header> */}
      <AppBar />
      <Outlet />
    </>
  )
}