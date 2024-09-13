import { lazy, Suspense, useEffect, useState } from 'react'

import { IconArcaLive, IconBell, IconGithub, IconSearch } from '@assets/icons'
import { Badge } from '@components/(common)'
import {
  BadgeButton,
  LinkButton,
  SearchButton,
  Shortcut,
} from '@components/@global-header'

export function ArcaLiveLink() {
  return (
    <LinkButton href='https://arca.live/b/azurlane/45593816'>
      <IconArcaLive />
    </LinkButton>
  )
}

export function GithubLink() {
  return (
    <LinkButton href='https://github.com/gateisbug/alit'>
      <IconGithub />
    </LinkButton>
  )
}

const SearchModal = lazy(() => import('./(search-modal).tsx'))

export function Search() {
  const [open, setOpen] = useState(false)

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
        <SearchModal open={open} onClose={() => setOpen(false)} />
      </Suspense>
    </>
  )
}

const NotiModal = lazy(() => import('./(noti-modal).tsx'))

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
        <NotiModal
          open={open}
          onClose={() => {
            setOpen(false)
          }}
        />
      </Suspense>
    </>
  )
}
