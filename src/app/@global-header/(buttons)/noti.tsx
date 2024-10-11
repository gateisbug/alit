import { useEffect, useState } from 'react'

import IconBell from '@assets/icons/icon-bell.tsx'
import { Badge } from '@components/(common)/badge.ts'
import { BadgeButton } from '@components/@global-header/(buttons).ts'

function useNotification() {
  // @ts-ignore
  const currentVersion = __APP_VERSION__
  const [versionChange, setVersionChange] = useState(false)

  useEffect(() => {
    const version = localStorage.getItem('version') ?? ''
    if (version !== currentVersion) setVersionChange(true)
  }, [])

  return {
    versionChange,
    handlerNotiButton: () => {
      localStorage.setItem('version', currentVersion)
      setVersionChange(false)
    },
  }
}

export default function Notification() {
  const { versionChange, handlerNotiButton } = useNotification()

  return (
    <>
      <BadgeButton onClick={handlerNotiButton} aria-label='변경사항 보기'>
        <IconBell />
        <Badge data-show={versionChange} />
      </BadgeButton>
    </>
  )
}
