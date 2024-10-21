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

function useNotiModal() {
  const [searchParams, setSearchParams] = useSearchParams()

  const onClose = () => {
    searchParams.delete('modal')
    setSearchParams(searchParams)
  }

  return {
    onClose,
  }
}

export default function NotiModal({ log }: Props) {
  const { onClose } = useNotiModal()

  return log ? (
    <ModalContainer>
      <ModalHeader>
        <ModalClose onClick={onClose} />
      </ModalHeader>

      <ModalBody>
        <h2 className='t3 fwb fcs'>v{log.version} 변경사항</h2>
        <ReleaseLink to={log.release ?? ''} />
        <address>{log.date} 배포</address>
        <ChangeLog>{log.patch?.map((v) => <li key={v}>{v}</li>)}</ChangeLog>
      </ModalBody>
    </ModalContainer>
  ) : null
}
