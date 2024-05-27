import { LinkBox, LinkShortcut } from '@components/(main)'

export default function SearchButton({ onClick }: { onClick?: () => void }) {
  // noinspection HtmlUnknownTarget
  return (
    <LinkBox>
      <button type='button' onClick={onClick}>
        <img width={20} height={20} src='assets/search.svg' alt='검색' />
        <span className='search-text fza lh'>Search...</span>
        <LinkShortcut>Ctrl+K</LinkShortcut>
      </button>
    </LinkBox>
  )
}
