import { Header, Links, Logo } from '@components/@global-header/styled.ts'

import { Search, ArcaLiveLink, GithubLink, Notification } from './(buttons).tsx'
import { Link } from 'react-router-dom'

export default function GlobalHeader() {
  // noinspection HtmlUnknownTarget
  return (
    <Header>
      <div className='wrap flex jc-sb ai-c bb'>
        <Logo>
          <Link to='/item' className='flex'>
            <img
              src='assets/logo.png'
              width={36}
              height={36}
              alt='logo'
              className='b2'
            />
          </Link>
        </Logo>

        <Links>
          <Search />
          <ArcaLiveLink />
          <GithubLink />
          <Notification />
        </Links>
      </div>
    </Header>
  )
}
