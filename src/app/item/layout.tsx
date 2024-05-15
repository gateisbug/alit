import { ReactNode } from 'react'

export default function ItemLayout({ children }: { children: ReactNode }) {
  return <main className='header-adder'>{children}</main>
}
