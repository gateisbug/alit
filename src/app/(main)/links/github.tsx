import { LinkBox } from '@components/(main)'
import Image from '@components/common/Image'
import { Link } from 'react-router-dom'

export default function GithubLink() {
  // noinspection HtmlUnknownTarget
  return (
    <LinkBox>
      <Link
        to='https://github.com/gateisbug/alit'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          width={20}
          height={20}
          src='assets/github.svg'
          alt='깃허브 링크'
        />
      </Link>
    </LinkBox>
  )
}
