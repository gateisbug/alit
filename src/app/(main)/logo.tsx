import { LogoBox } from '@components/(main)'
import Image from '@components/common/Image'

export default function Logo() {
  // noinspection HtmlUnknownTarget
  return (
    <LogoBox>
      <Image src='assets/logo-m.png' alt='logo' width={32} height={32} />
    </LogoBox>
  )
}
