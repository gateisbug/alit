import { ReactNode } from 'react';

export default function ItemLayout({ children }:{ children: ReactNode }) {
  return (
    <div className='header-adder'>{children}</div>
  )
}