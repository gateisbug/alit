import { SearchBar, ClickableKeybutton } from '@components/(main)'

export default function SearchInput(props: {
  onChange: (value: string) => void
  onClickClose: () => void
}) {
  const { onChange, onClickClose } = props

  // noinspection HtmlUnknownTarget
  return (
    <SearchBar>
      <div className='search-form'>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor='search-input'>
          <img width={24} height={24} src='assets/search.svg' alt='검색' />
        </label>
        <input
          id='search-input'
          autoComplete='off'
          autoCorrect='off'
          autoCapitalize='off'
          enterKeyHint='search'
          spellCheck='false'
          placeholder='검색: 장비명, 별명, 설명'
          type='search'
          maxLength={64}
          onChange={(e) => {
            onChange(e.target.value)
          }}
        />
      </div>
      <ClickableKeybutton onClick={onClickClose} content='esc'>
        Cancel
      </ClickableKeybutton>
    </SearchBar>
  )
}
