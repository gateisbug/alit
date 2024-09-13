import { Header, Links, Logo } from '@components/@global-header'

import { Search, ArcaLiveLink, GithubLink, Notification } from './(buttons).tsx'

export default function GlobalHeader() {
  // noinspection HtmlUnknownTarget
  return (
    <Header>
      <div className='wrap flex jc-sb ai-c bb'>
        <Logo>
          <img src='assets/logo.png' alt='logo' className='b2' />
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
