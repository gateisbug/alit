import { lazy, Suspense, useEffect, useState } from 'react'

import { NOTIMODALKEY } from '@app/(modals)/(modal-keys).ts'
import IconBell from '@assets/icons/icon-bell.tsx'
import { Badge } from '@components/(common)/badge.ts'
import { useModalStore } from '@components/(common)/modal/index.ts'
import { BadgeButton } from '@components/@global-header/(buttons).ts'

const NotiModal = lazy(() => import('@app/(modals)/@noti-modal/page.tsx'))

export default function Notification() {
  // @ts-ignore
  const currentVersion = __APP_VERSION__
  const [versionChange, setVersionChange] = useState(false)

  const { modalOpen, modalClose } = useModalStore()
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
