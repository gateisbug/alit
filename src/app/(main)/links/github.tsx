import Image from 'next/image'
import Link from 'next/link'

import { LinkBox } from '@components/(main)'

export default function GithubLink() {
  return (
    <LinkBox>
      <Link
        href='https://github.com/gateisbug/alit'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          width={20}
          height={20}
          src='/assets/github.svg'
          alt='깃허브 링크'
        />
      </Link>
    </LinkBox>
  )
}
