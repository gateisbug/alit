import { lazy, Suspense, useEffect, useState } from 'react'

import { IconArcaLive, IconBell, IconGithub, IconSearch } from '@assets/icons'
import { Badge } from '@components/(common)/badge.ts'
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

const SearchModal = lazy(() => import('../@search-modal/page.tsx'))

export function Search() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault()
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
          setOpen(true)
        }}
      >
        <IconSearch />
        <span className='caption desktop span'>Search...</span>
        <Shortcut className='desktop shortcut'>Ctrl+K</Shortcut>
      </SearchButton>

      <Suspense>
        {open && <SearchModal open={open} onClose={() => setOpen(false)} />}
      </Suspense>
    </>
  )
}

const NotiModal = lazy(() => import('../@noti-modal/page.tsx'))

export function Notification() {
  // @ts-ignore
  const currentVersion = __APP_VERSION__
  const [versionChange, setVersionChange] = useState(false)

  const [open, setOpen] = useState(false)
  const onClickNoti = () => {
    setOpen(true)
    localStorage.setItem('version', currentVersion)
    setVersionChange(false)
  }

  useEffect(() => {
    const version = localStorage.getItem('version') ?? ''

    if (version !== currentVersion) {
      setVersionChange(true)
    }
  }, [])

  return (
    <>
      <BadgeButton onClick={onClickNoti}>
        <IconBell />
        <Badge data-show={versionChange} />
      </BadgeButton>

      <Suspense>
        {open && (
          <NotiModal
            open={open}
            onClose={() => {
              setOpen(false)
            }}
          />
        )}
      </Suspense>
    </>
  )
}
