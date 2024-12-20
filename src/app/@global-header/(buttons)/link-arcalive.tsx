import IconArcaLive from '@assets/icons/icon-arcalive.tsx'
import { LinkButton } from '@components/@global-header/(buttons).ts'

export default function ArcaLiveLink() {
  return (
    <LinkButton
      href='https://arca.live/b/azurlane/45593816'
      aria-label='아카라이브 장비 설명회 페이지로 이동'
      title='아카라이브 장비 설명회 페이지로 이동'
    >
      <IconArcaLive />
    </LinkButton>
  )
}
