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
  const [version, setVersion] = useState<IChangeLog | undefined>(undefined)
  // const [versionChange, setVersionChange] = useState(false)

  const handlerNotiButton = async () => {
    // setVersionChange(false)
    searchParams.set('modal', NOTIMODALKEY)
    setSearchParams(searchParams)
  }

  useEffect(() => {
    const local = localStorage.getItem('version') ?? '{"version":"2.3.1"}'
    let log = JSON.parse(local)

    if (typeof log === 'string') {
      log = { version: '2.3.1' }
    }

    setVersion(log)
    localStorage.setItem('version', JSON.stringify(log))
  }, [])

  useEffect(() => {
    modalAdd({
      id: NOTIMODALKEY,
      children: <NotiModal log={version} />,
    })
  }, [version])

  return {
    versionChange: version?.version === currentVersion,
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
