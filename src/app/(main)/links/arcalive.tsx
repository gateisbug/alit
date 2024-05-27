import { LinkBox } from '@components/(main)'
import { Link } from 'react-router-dom'

function ArcaLiveLink() {
  // noinspection HtmlUnknownTarget
  return (
    <LinkBox>
      <Link
        to='https://arca.live/b/azurlane/45593816'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          width={20}
          height={20}
          src='assets/arcalive.svg'
          alt='아카라이브 원본 리소스 게시글'
        />
      </Link>
    </LinkBox>
  )
}

export default ArcaLiveLink
