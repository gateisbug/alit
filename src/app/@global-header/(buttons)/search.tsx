import { useCallback, useEffect } from 'react'

import IconSearch from '@assets/icons/icon-search.tsx'
import { SEARCHMODALKEY } from '@components/(modals)/(modal-keys).ts'
import SearchModal from '@components/(modals)/search/page.tsx'
import { useModalStore } from '@components/(modals)/useModalStore.tsx'
import { SearchButton, Shortcut } from '@components/@global-header/(buttons).ts'

function useSearch() {
  const { lists, modalOpen } = useModalStore()

  const clickHandler = useCallback(() => {
    modalOpen({
      id: SEARCHMODALKEY,
      children: <SearchModal />,
    })
  }, [lists])

  useEffect(() => {
    if (lists.length > 0) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault()
        clickHandler()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lists])

  return {
    clickHandler,
  }
}

export default function Search() {
  const { clickHandler } = useSearch()

  return (
    <SearchButton onClick={clickHandler}>
      <IconSearch />
      <span className='caption desktop span'>Search...</span>
      <Shortcut className='desktop shortcut'>Ctrl+K</Shortcut>
    </SearchButton>
  )
}
