import { Link } from 'react-router-dom'

import { Logo as LogoBox } from '@components/@global-header/styled.ts'

export default function Logo() {
  // noinspection HtmlUnknownTarget
  return (
    <LogoBox title='메인 페이지로 이동'>
      <Link to='/item' className='flex'>
        <img
          src='assets/logo.png'
          width={36}
          height={36}
          alt='logo'
          className='b2'
        />
      </Link>
    </LogoBox>
  )
}
