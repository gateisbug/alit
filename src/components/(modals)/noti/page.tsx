import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { ModalClose } from '@components/(common)/modal.tsx'
import {
  ChangeLog,
  ModalBody,
  ModalHeader,
  ReleaseLink,
  ModalContainer,
} from '@components/(modals)/noti/styled.ts'

interface Props {
  log?: IChangeLog
}

const DEFAULT_CHANGE: IChangeLog = {
  version: '0.0.0',
  release: '',
  date: '0000-00-00',
  patch: [],
}

function useNotiModal(log?: IChangeLog) {
  const [change, setChange] = useState<IChangeLog | undefined>(undefined)
  const [searchParams, setSearchParams] = useSearchParams()

  const fetchLog = useCallback(async () => {
    try {
      const response =
        await fetch('json/change.json') /* @TODO: 버전업 시 json 수정 */
      // noinspection UnnecessaryLocalVariableJS
      const json =
        ((await response.json()) as unknown as IChangeLog) ?? DEFAULT_CHANGE
      return json
    } catch (e) {
      throw new Error('Failed to fetch item')
    }
  }, [])

  const onClose = () => {
    searchParams.delete('modal')
    setSearchParams(searchParams)
  }

  useEffect(() => {
    if (!log) {
      fetchLog()
        .then((res) => {
          setChange(res)
          localStorage.setItem('version', JSON.stringify(res))
        })
        // eslint-disable-next-line no-console
        .catch((e) => console.error(e))
    } else {
      setChange(log)
    }
  }, [])

  return {
    change,
    onClose,
  }
}

export default function NotiModal({ log }: Props) {
  const { change, onClose } = useNotiModal(log)

  return (
    <ModalContainer>
      <ModalHeader>
        <ModalClose onClick={onClose} />
      </ModalHeader>

      <ModalBody>
        <h2 className='t3 fwb fcs'>v{change?.version} 변경사항</h2>
        <ReleaseLink to={change?.release ?? ''} />
        <address>{change?.date} 배포</address>
        <ChangeLog>{change?.patch?.map((v) => <li key={v}>{v}</li>)}</ChangeLog>
      </ModalBody>
    </ModalContainer>
  )
}
