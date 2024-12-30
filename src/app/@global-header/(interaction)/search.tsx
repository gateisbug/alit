import debounce from 'lodash-es/debounce'
import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { isDesktop } from 'react-device-detect'
import { useSearchParams } from 'react-router-dom'

import IconClose from '@assets/icons/icon-close.tsx'
import IconSearch from '@assets/icons/icon-search.tsx'
import {
  Icon,
  IconButton,
  InputBox,
  InputRoot,
  Shortcut,
} from '@components/@global-header/search.ts'

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const modal = searchParams.get('modal')
  const [searchKeyword, setSearchKeyword] = useState('')

  /**
   * 입력값이 1초 뒤에 상태값에 적용되는 디바운스 핸들러
   */
  const onChangeInput = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => {
      setSearchKeyword(e.target.value)
    }, 1000),
    [],
  )

  /**
   * 클리어 버튼을 누르면 #search-input의 값이 모두 제거되는 핸들러
   */
  const onClickClear = useCallback(() => {
    const input = document.getElementById('search-input')
    if (input) {
      ;(input as HTMLInputElement).value = ''
      setSearchKeyword('')
    }
  }, [])

  /**
   * 엔터키를 입력하면 즉시 값이 반영되는 핸들러
   */
  const onEnter = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchKeyword((e.target as HTMLInputElement)?.value ?? '')
    }
  }, [])

  /**
   * serachKeyword 상태 값에 따라 serachParams에 파라미터로 등록하거나 해지하는 사이드 이펙트
   */
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

  /**
   * ctrl+k를 입력하면 기존의 동작을 취소하고, #search-input을 찾아 focus하는 이벤트를 할당하는 사이드 이펙트
   * modal이 켜져있으면 작동하지 않음.
   */
  useEffect(() => {
    const keypressHandler = (e: any) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault()

        if ((modal?.length ?? 0) > 0) return
        const search = document.getElementById('search-input')
        if (search) search.focus()
      }
    }

    window.addEventListener('keydown', keypressHandler)
    return () => {
      window.removeEventListener('keydown', keypressHandler)
    }
  }, [modal])

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

      <IconButton onClick={onClickClear} aria-label='검색'>
        <IconClose />
      </IconButton>
      {isDesktop && <Shortcut className='desktop shortcut'>Ctrl+K</Shortcut>}
    </InputBox>
  )
}
