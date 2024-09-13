import { useEffect, useState } from 'react'

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

export function Search() {
  return (
    // @TODO: onClick 이벤트 추가해야됨
    <SearchButton
      onClick={() => {
        console.log('search modal')
      }}
    >
      <IconSearch />
      <span className='caption desktop'>Search...</span>
      <Shortcut className='desktop'>Ctrl+K</Shortcut>
    </SearchButton>
  )
}

export function Notification() {
  // @ts-ignore
  const currentVersion = __APP_VERSION__
  const [versionChange, setVersionChange] = useState(false)

  const [, setOpen] = useState(false)
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
    <BadgeButton onClick={onClickNoti}>
      <IconBell />
      <Badge data-show={versionChange} />
      {/* @TODO: 나중에 localStorage에서 버전 확인 후 신규 버전이면 표시되도록 변경 */}
    </BadgeButton>
  )
}
