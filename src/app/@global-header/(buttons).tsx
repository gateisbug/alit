import { lazy, Suspense, useEffect, useState } from 'react'

import { NOTIMODALKEY, SEARCHMODALKEY } from '@app/(modals)/(modal-keys).ts'
import IconArcaLive from '@assets/icons/icon-arcalive.tsx'
import IconBell from '@assets/icons/icon-bell.tsx'
import IconGithub from '@assets/icons/icon-github.tsx'
import IconSearch from '@assets/icons/icon-search.tsx'
import { Badge } from '@components/(common)/badge.ts'
import { modalStore } from '@components/(common)/modal.tsx'
import {
  BadgeButton,
  LinkButton,
  SearchButton,
  Shortcut,
} from '@components/@global-header/(buttons).ts'

export function ArcaLiveLink() {
  return (
    <LinkButton
      href='https://arca.live/b/azurlane/45593816'
      aria-label='아카라이브 장비 설명회 페이지로 이동'
    >
      <IconArcaLive />
    </LinkButton>
  )
}

export function GithubLink() {
  return (
    <LinkButton
      href='https://github.com/gateisbug/alit'
      aria-label='깃허브 리드미 페이지로 이동'
    >
      <IconGithub />
    </LinkButton>
  )
}

const SearchModal = lazy(() => import('@app/(modals)/@search-modal/page.tsx'))

export function Search() {
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

const NotiModal = lazy(() => import('@app/(modals)/@noti-modal/page.tsx'))

export function Notification() {
  // @ts-ignore
  const currentVersion = __APP_VERSION__
  const [versionChange, setVersionChange] = useState(false)

  const { modalOpen, modalClose } = modalStore()
  const [open, setOpen] = useState(false)
  const onClickNoti = () => {
    modalOpen(NOTIMODALKEY)
    setOpen(true)
    localStorage.setItem('version', currentVersion)
    setVersionChange(false)
  }

  useEffect(() => {
    const version = localStorage.getItem('version') ?? ''
    if (version !== currentVersion) setVersionChange(true)
  }, [])

  return (
    <>
      <BadgeButton onClick={onClickNoti} aria-label='변경사항 보기'>
        <IconBell />
        <Badge data-show={versionChange} />
      </BadgeButton>

      <Suspense>
        {open && (
          <NotiModal
            open={open}
            onClose={() => {
              setOpen(false)
              modalClose(NOTIMODALKEY)
            }}
          />
        )}
      </Suspense>
    </>
  )
}
