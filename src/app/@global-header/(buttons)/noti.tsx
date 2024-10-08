import { lazy, Suspense, useEffect, useState } from 'react'

import { NOTIMODALKEY } from '@app/(modals)/(modal-keys).ts'
import IconBell from '@assets/icons/icon-bell.tsx'
import { Badge } from '@components/(common)/badge.ts'
import { useModalStore } from '@components/(common)/modal/index.ts'
import { BadgeButton } from '@components/@global-header/(buttons).ts'

const NotiModal = lazy(() => import('@app/(modals)/@noti-modal/page.tsx'))

function useNotification() {
  // @ts-ignore
  const currentVersion = __APP_VERSION__
  const [versionChange, setVersionChange] = useState(false)
  const { lists, add } = useModalStore()

  useEffect(() => {
    const version = localStorage.getItem('version') ?? ''
    if (version !== currentVersion) setVersionChange(true)
  }, [])

  return {
    versionChange,
    open: lists.includes(NOTIMODALKEY),
    handlerNotiButton: () => {
      localStorage.setItem('version', currentVersion)
      setVersionChange(false)
      add(NOTIMODALKEY)
    },
  }
}

export default function Notification() {
  const { versionChange, handlerNotiButton, open } = useNotification()

  return (
    <>
      <BadgeButton onClick={handlerNotiButton} aria-label='변경사항 보기'>
        <IconBell />
        <Badge data-show={versionChange} />
      </BadgeButton>

      <Suspense>{open && <NotiModal />}</Suspense>
    </>
  )
}
