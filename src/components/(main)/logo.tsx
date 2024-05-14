import Image from 'next/image'
import styled from 'styled-components'

const LogoBox = styled.h1`
  height: fit-content;
  line-height: 0;
  user-select: none;
`

export default function Logo() {
  return (
    <LogoBox>
      <Image
        src='/assets/logo-m.png'
        alt='logo'
        width='32'
        height='32'
        priority
      />
    </LogoBox>
  )
}
