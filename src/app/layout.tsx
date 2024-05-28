import AppBar from '@app/(main)/appbar'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <>
      <AppBar />
      <div className='header-adder'>
        <Outlet />
      </div>
    </>
  )
}
