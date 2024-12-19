import { lazy, useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import IconBell from '@assets/icons/icon-bell.tsx'
import { Badge } from '@components/(common)/badge.ts'
import { NOTIMODALKEY } from '@components/(modals)/(modal-keys).ts'
import { BadgeButton } from '@components/@global-header/(buttons).ts'
import useModalStore from '@util/store/modal.ts'

const DEFAULT_CHANGE: IChangeLog = {
  version: '0.0.0',
  release: '',
  date: '0000-00-00',
  patch: [],
  isOpen: true,
}

const NotiModal = lazy(() => import('@components/(modals)/noti/page.tsx'))

function useNotification() {
  const { modalAdd } = useModalStore()
  const [searchParams, setSearchParams] = useSearchParams()

  // @ts-ignore
  const currentVersion = __APP_VERSION__ as string
  const [version, setVersion] = useState(DEFAULT_CHANGE)

  const handlerNotiButton = async () => {
    setVersion((prev) => {
      const curr = { ...prev, isOpen: true }
      localStorage.setItem('version', JSON.stringify(curr))
      return curr
    })
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

  const fetchLog = useCallback(async () => {
    try {
      const response =
        await fetch(
          'json/change.json',
        ) /* @TODO: [2.4.11] 버전업 시 json 수정 */
      // noinspection UnnecessaryLocalVariableJS
      const json =
        ((await response.json()) as unknown as IChangeLog) ?? DEFAULT_CHANGE
      return json
    } catch (e) {
      throw new Error('Failed to fetch item')
    }
  }, [])

  useEffect(() => {
    const log = getItem()

    if (log?.version !== currentVersion) {
      fetchLog()
        .then((res) => {
          localStorage.setItem('version', JSON.stringify(res))
          setVersion({ ...res })
        })
        .catch((e) => {
          throw new Error(e)
        })
    } else {
      setVersion(log)
    }
  }, [])

  useEffect(() => {
    if (version === undefined) return

    modalAdd({
      id: NOTIMODALKEY,
      children: <NotiModal log={version} />,
    })
  }, [version])

  return {
    notOpen: version?.isOpen !== true,
    handlerNotiButton,
  }
}

export default function Notification() {
  const { notOpen, handlerNotiButton } = useNotification()

  return (
    <BadgeButton onClick={handlerNotiButton} aria-label='변경사항 보기'>
      <IconBell />
      <Badge data-show={notOpen} />
    </BadgeButton>
  )
}
