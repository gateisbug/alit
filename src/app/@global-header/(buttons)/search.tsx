import { lazy, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import IconSearch from '@assets/icons/icon-search.tsx'
import { SEARCHMODALKEY } from '@components/(modals)/(modal-keys).ts'
import { SearchButton, Shortcut } from '@components/@global-header/(buttons).ts'
import useModalStore from '@util/store/modal.ts'

const SearchModal = lazy(() => import('@components/(modals)/search/page.tsx'))

function useSearch() {
  const { modalAdd } = useModalStore()
  const [searchParams, setSearchParams] = useSearchParams()

  const clickHandler = () => {
    searchParams.set('modal', SEARCHMODALKEY)
    setSearchParams(searchParams)
  }

  useEffect(() => {
    modalAdd({
      id: SEARCHMODALKEY,
      children: <SearchModal />,
    })
  }, [])

  useEffect(() => {
    const modal = searchParams.get('modal')
    if (modal !== null) return

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
  }, [searchParams])

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
