import { useMediaQuery } from 'react-responsive'
import { Link, useLocation } from 'react-router-dom'

import { Logo as LogoBox } from '@components/@global-header/styled.ts'

export default function Logo() {
  const { pathname } = useLocation()
  const isDarkTheme = useMediaQuery({ query: '(prefers-color-scheme: dark)' })

  // noinspection HtmlUnknownTarget
  return (
    <LogoBox
      title={
        pathname === '/item' ? '함순이 리스트로 이동' : '장비 설명회로 이동'
      }
    >
      <Link to={pathname === '/item' ? '/character' : '/item'} className='flex'>
        <img
          src={isDarkTheme ? 'assets/logo-dark.png' : 'assets/logo-light.png'}
          width={36}
          height={36}
          alt='logo'
          className='b2'
        />
      </Link>
    </LogoBox>
  )
}
