import dynamic from 'next/dynamic';
import Link from 'next/link';

const Image = dynamic(() => import('next/image'));
const ContentsBox = dynamic(() => import('@app/(main)/link-sc'));

export function ArcaLiveLink() {
  return (
    <ContentsBox>
      <Link
        href='https://arca.live/b/azurlane/45593816'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image width={20} height={20} src='/assets/arcalive.svg' alt='아카라이브 원본 리소스 게시글' />
      </Link>
    </ContentsBox>
  )
}

export function GithubLink() {
  return (
    <ContentsBox>
      <Link
        href='https://github.com/gateisbug/alit'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image width={20} height={20} src='/assets/github.svg' alt='깃허브 링크' />
      </Link>
    </ContentsBox>
  )
}

export function SearchButton({ onClick }:{
  onClick?: () => void;
}) {
  return (
    <ContentsBox>
      <button type='button' onClick={onClick}>
        <Image width={20} height={20} src='/assets/search.svg' alt='검색' />
        <span className='search-text fza lh'>
          Search...
        </span>
      </button>
    </ContentsBox>
  )
}