import { lazy, useCallback, useEffect, useState } from 'react'

import IconBell from '@assets/icons/icon-bell.tsx'
import { Badge } from '@components/(common)/badge.ts'
import { NOTIMODALKEY } from '@components/(modals)/(modal-keys).ts'
import { useModalStore } from '@components/(modals)/useModalStore.tsx'
import { BadgeButton } from '@components/@global-header/(buttons).ts'

const NotiModal = lazy(() => import('@components/(modals)/noti/page.tsx'))

function useNotification() {
  // @ts-ignore
  const currentVersion = __APP_VERSION__
  const [versionChange, setVersionChange] = useState(false)
  const { lists, modalOpen } = useModalStore()

  const handlerNotiButton = useCallback(() => {
    localStorage.setItem('version', currentVersion)
    setVersionChange(false)
    modalOpen({
      id: NOTIMODALKEY,
      children: <NotiModal />,
    })
  }, [lists])

  useEffect(() => {
    const version = localStorage.getItem('version') ?? ''
    if (version !== currentVersion) setVersionChange(true)
  }, [])

  return {
    versionChange,
    handlerNotiButton,
  }
}

export default function Notification() {
  const { versionChange, handlerNotiButton } = useNotification()

  return (
    <BadgeButton onClick={handlerNotiButton} aria-label='변경사항 보기'>
      <IconBell />
      <Badge data-show={versionChange} />
    </BadgeButton>
  )
}
