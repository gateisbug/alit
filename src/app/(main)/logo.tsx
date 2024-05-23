import Image from 'next/image'

import { LogoBox } from '@components/(main)'

export default function Logo() {
  return (
    <LogoBox>
      <Image
        src='/assets/logo-m.png'
        alt='logo'
        width={32}
        height={32}
        priority
      />
    </LogoBox>
  )
}
