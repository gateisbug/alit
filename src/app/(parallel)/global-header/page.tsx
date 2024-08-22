import {
  Header,
  Logo,
  InteractionArea,
} from '@components/(parallel)/global-header'

import {
  ArcaLiveLink,
  GithubLink,
  Notification,
  Search,
} from './(interactions).tsx'

export default function GlobalHeader() {
  // noinspection HtmlUnknownTarget
  return (
    <Header id='global-header' className='flex jc-b al-c bb'>
      <Logo id='logo' className='flex jc-c al-c'>
        <img id='logo-img' className='b2' src='assets/logo.png' alt='logo' />
      </Logo>

      <InteractionArea className='flex al-c b2'>
        <Search />
        <ArcaLiveLink />
        <GithubLink />
        <Notification />
      </InteractionArea>
    </Header>
  )
}
