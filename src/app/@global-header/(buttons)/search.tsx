import { lazy, Suspense, useEffect, useState } from 'react'

import { SEARCHMODALKEY } from '@app/(modals)/(modal-keys).ts'
import IconSearch from '@assets/icons/icon-search.tsx'
import { modalStore } from '@components/(common)/modal.tsx'
import { SearchButton, Shortcut } from '@components/@global-header/(buttons).ts'

const SearchModal = lazy(() => import('@app/(modals)/@search-modal/page.tsx'))

export default function Search() {
  const { modalOpen, modalClose } = modalStore()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault()
        modalOpen(SEARCHMODALKEY)
        setOpen(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
      <SearchButton
        onClick={() => {
          modalOpen(SEARCHMODALKEY)
          setOpen(true)
        }}
      >
        <IconSearch />
        <span className='caption desktop span'>Search...</span>
        <Shortcut className='desktop shortcut'>Ctrl+K</Shortcut>
      </SearchButton>

      <Suspense>
        {open && (
          <SearchModal
            open={open}
            onClose={() => {
              setOpen(false)
              modalClose(SEARCHMODALKEY)
            }}
          />
        )}
      </Suspense>
    </>
  )
}
