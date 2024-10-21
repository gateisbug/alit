import { lazy, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import IconBell from '@assets/icons/icon-bell.tsx'
import { Badge } from '@components/(common)/badge.ts'
import { NOTIMODALKEY } from '@components/(modals)/(modal-keys).ts'
import { BadgeButton } from '@components/@global-header/(buttons).ts'
import useModalStore from '@util/store/modal.ts'

const NotiModal = lazy(() => import('@components/(modals)/noti/page.tsx'))

function useNotification() {
  const { modalAdd } = useModalStore()
  const [searchParams, setSearchParams] = useSearchParams()

  // @ts-ignore
  const currentVersion = __APP_VERSION__ as string
  const [versionChange, setVersionChange] = useState(false)

  const handlerNotiButton = async () => {
    setVersionChange(false)
    searchParams.set('modal', NOTIMODALKEY)
    setSearchParams(searchParams)
  }

  const getItem = () => {
    const local = localStorage.getItem('version') ?? ''

    try {
      return JSON.parse(local)
    } catch {
      return undefined
    }
  }

  useEffect(() => {
    const log = getItem()
    setVersionChange(log?.version !== currentVersion)
  }, [])

  useEffect(() => {
    const version = getItem()

    modalAdd({
      id: NOTIMODALKEY,
      children: <NotiModal log={versionChange ? undefined : version} />,
    })
  }, [versionChange])

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
