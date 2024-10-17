import { lazy, useEffect, useLayoutEffect, useState } from 'react'
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
  const currentVersion = __APP_VERSION__
  const [versionChange, setVersionChange] = useState(false)

  const handlerNotiButton = async () => {
    setVersionChange(false)
    searchParams.set('modal', NOTIMODALKEY)
    setSearchParams(searchParams)
  }

  useEffect(() => {
    const log = JSON.parse(
      localStorage.getItem('version') ?? '{"version":"2.3.1"}',
    ) as unknown as IChangeLog
    if (log.version !== currentVersion) {
      setVersionChange(true)
    }
  }, [])

  useLayoutEffect(() => {
    const item = localStorage.getItem('version')
    const log =
      item !== null ? (JSON.parse(item) as unknown as IChangeLog) : undefined

    modalAdd({
      id: NOTIMODALKEY,
      children: <NotiModal log={log} />,
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
