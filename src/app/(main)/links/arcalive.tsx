import Image from 'next/image'
import Link from 'next/link'

import { LinkBox } from '@components/(main)'

function ArcaLiveLink() {
  return (
    <LinkBox>
      <Link
        href='https://arca.live/b/azurlane/45593816'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          width={20}
          height={20}
          sizes='20px'
          src='/assets/arcalive.svg'
          alt='아카라이브 원본 리소스 게시글'
        />
      </Link>
    </LinkBox>
  )
}

export default ArcaLiveLink
