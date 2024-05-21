import Image from 'next/image'

import { LinkBox, LinkShortcut } from '@components/(main)'

export default function SearchButton({ onClick }: { onClick?: () => void }) {
  return (
    <LinkBox>
      <button type='button' onClick={onClick}>
        <Image
          width={20}
          height={20}
          sizes='20px'
          src='/assets/search.svg'
          alt='검색'
        />
        <span className='search-text fza lh'>Search...</span>
        <LinkShortcut>Ctrl+K</LinkShortcut>
      </button>
    </LinkBox>
  )
}
