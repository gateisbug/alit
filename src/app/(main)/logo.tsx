import { LogoBox } from '@components/(main)'

export default function Logo() {
  // noinspection HtmlUnknownTarget
  return (
    <LogoBox>
      <img
        src='assets/logo-m.png'
        alt='logo'
        width={32}
        height={32}
      />
    </LogoBox>
  )
}
