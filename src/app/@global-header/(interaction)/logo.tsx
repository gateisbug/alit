import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

import { Logo as LogoBox } from '@components/@global-header/styled.ts'

export default function Logo() {
  const isDarkTheme = useMediaQuery({ query: '(prefers-color-scheme: dark)' })

  // noinspection HtmlUnknownTarget
  return (
    <LogoBox title='메인 페이지로 이동'>
      <Link to='/item' className='flex'>
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
