import { lazy, useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import IconBell from '@assets/icons/icon-bell.tsx'
import { Badge } from '@components/(common)/badge.ts'
import { NOTIMODALKEY } from '@components/(modals)/(modal-keys).ts'
import { BadgeButton } from '@components/@global-header/(buttons).ts'
import useModalStore from '@util/store/modal.ts'

const NotiModal = lazy(() => import('@components/(modals)/noti/page.tsx'))

function useNotification() {
  // @ts-ignore
  const currentVersion = __APP_VERSION__
  const [versionChange, setVersionChange] = useState(false)
  const { lists, modalAdd } = useModalStore()
  const [searchParams, setSearchParams] = useSearchParams()

  const handlerNotiButton = useCallback(() => {
    localStorage.setItem('version', currentVersion)
    setVersionChange(false)
    searchParams.set('modal', NOTIMODALKEY)
    setSearchParams(searchParams)
  }, [lists])

  useEffect(() => {
    const version = localStorage.getItem('version') ?? ''
    if (version !== currentVersion) setVersionChange(true)
  }, [])

  useEffect(() => {
    modalAdd({
      id: NOTIMODALKEY,
      children: <NotiModal />,
    })
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
