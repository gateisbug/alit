import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

// noinspection CssUnusedSymbol
const ContentsBox = styled.div`
  & > a, & > button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    text-align: center;
    flex: 0 0 auto;
    font-size: 1.5rem;
    overflow: visible;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    padding: 0.375rem;
    border: 1px solid var(--border-weak);
    border-radius: 0.75rem;
    color: var(--primary);
    font-family: inherit;

    &:hover {
      border-color: var(--border);
      background-color: var(--border-weak);
    }

    & > img {
      width: 20px;
      height: 20px;
    }

    & > .search-text {
      margin-left: 8px;
      margin-right: 4px;
    }
  }
`;

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