import { Header, Links, Logo } from '@components/@global-header'

export default function GlobalHeader() {
  // noinspection HtmlUnknownTarget
  return (
    <Header>
      <Logo>
        <img src='assets/logo.png' alt='logo' className='b2' />
      </Logo>

      <Links>
        <a href='/'>move</a>
      </Links>
    </Header>
  )
}
