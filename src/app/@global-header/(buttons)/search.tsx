import { lazy, Suspense, useEffect } from 'react'

import { SEARCHMODALKEY } from '@app/(modals)/(modal-keys).ts'
import IconSearch from '@assets/icons/icon-search.tsx'
import { useModalStore } from '@components/(common)/modal/index.ts'
import { SearchButton, Shortcut } from '@components/@global-header/(buttons).ts'

const SearchModal = lazy(() => import('@app/(modals)/@search-modal/page.tsx'))

function useSearch() {
  const { lists, add } = useModalStore()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault()
        add(SEARCHMODALKEY)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return {
    open: lists.includes(SEARCHMODALKEY),
    handlerSearchButton: () => {
      add(SEARCHMODALKEY)
    },
  }
}

export default function Search() {
  const { open, handlerSearchButton } = useSearch()

  return (
    <>
      <SearchButton onClick={handlerSearchButton}>
        <IconSearch />
        <span className='caption desktop span'>Search...</span>
        <Shortcut className='desktop shortcut'>Ctrl+K</Shortcut>
      </SearchButton>

      <Suspense>{open && <SearchModal />}</Suspense>
    </>
  )
}
