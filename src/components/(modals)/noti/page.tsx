import { useCallback, useEffect, useState } from 'react'

import { ModalClose } from '@components/(common)/modal.styled.tsx'
import { NOTIMODALKEY } from '@components/(modals)/(modal-keys).ts'
import {
  ChangeLog,
  ModalBody,
  ModalHeader,
  ReleaseLink,
  ModalContainer,
} from '@components/(modals)/noti/styled.ts'
import useModalStore from '@util/store/modal.ts'

interface IChangeLog {
  version: string
  release: string
  date: string
  patch: string[]
}

const DEFAULT_CHANGE: IChangeLog = {
  version: '0.0.0',
  release: '',
  date: '0000-00-00',
  patch: [],
}

function useNotiModal() {
  const { modalClose } = useModalStore()
  const [change, setChange] = useState<IChangeLog>(DEFAULT_CHANGE)

  const fetchLog = useCallback(async () => {
    try {
      const response =
        await fetch('json/change.json') /* @TODO: 버전업 시 json 수정 */
      const json =
        ((await response.json()) as unknown as IChangeLog) ?? DEFAULT_CHANGE
      setChange(json)
    } catch (e) {
      throw new Error('Failed to fetch item')
    }
  }, [])

  const onClose = () => {
    modalClose(NOTIMODALKEY)
  }

  useEffect(() => {
    // eslint-disable-next-line no-console
    fetchLog().catch((e) => console.error(e))
  }, [])

  return {
    change,
    onClose,
  }
}

export default function NotiModal() {
  const { change, onClose } = useNotiModal()

  return (
    <ModalContainer>
      <ModalHeader>
        <ModalClose onClick={onClose} />
      </ModalHeader>

      <ModalBody>
        <h2 className='t3 fwb fcs'>v{change.version} 변경사항</h2>
        <ReleaseLink to={change.release} />
        <address>{change.date} 배포</address>
        <ChangeLog>
          {change.patch.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ChangeLog>
      </ModalBody>
    </ModalContainer>
  )
}
