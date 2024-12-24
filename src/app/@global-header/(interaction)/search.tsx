import debounce from 'lodash-es/debounce'
import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useSearchParams } from 'react-router-dom'

import IconSearch from '@assets/icons/icon-search.tsx'
import {
  Icon,
  InputBox,
  InputRoot,
  Shortcut,
} from '@components/@global-header/search.ts'

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchKeyword, setSearchKeyword] = useState('')

  const onChangeInput = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => {
      setSearchKeyword(e.target.value)
    }, 1000),
    [],
  )

  const onEnter = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchKeyword((e.target as HTMLInputElement)?.value ?? '')
    }
  }, [])

  useEffect(() => {
    if (searchKeyword.length) {
      const get = searchParams.get('keyword') ?? ''

      if (get !== searchKeyword) searchParams.set('keyword', searchKeyword)
      else return
    } else {
      searchParams.delete('keyword')
    }
    setSearchParams(searchParams)
  }, [searchKeyword])

  useEffect(() => {
    const keypressHandler = (e: any) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault()
        const search = document.getElementById('search-input')
        if (search) search.focus()
      }
    }

    window.addEventListener('keydown', keypressHandler)
    return () => {
      window.removeEventListener('keydown', keypressHandler)
    }
  }, [])

  return (
    <InputBox title='검색' aria-label='검색'>
      <Icon>
        <IconSearch />
      </Icon>
      <InputRoot
        id='search-input'
        onChange={onChangeInput}
        onKeyDown={onEnter}
        placeholder='Search...'
      />
      <Shortcut
        className='desktop shortcut'
        onClick={() => {
          const search = document.getElementById('search-input')
          if (search) search.focus()
        }}
      >
        Ctrl+K
      </Shortcut>
    </InputBox>
  )
}
