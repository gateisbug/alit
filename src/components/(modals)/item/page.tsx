import {
  Modal,
  ModalClose,
  useModalStore,
} from '@components/(common)/modal/index.ts'
import { ModalContainer } from '@components/(modals)/item/styled.ts'

import { ITEMMODALKEY, NOTIMODALKEY } from '../(modal-keys).ts'

interface Props {
  item: ItemInterface
}

export default function ItemModal({ item }: Props) {
  const { drop } = useModalStore()

  const onClose = () => {
    drop(NOTIMODALKEY)
  }

  // @TODO: Modal 구체화 해야함
  return (
    <Modal id={ITEMMODALKEY}>
      <ModalContainer>
        <header className='flex jc-fe'>
          <ModalClose onClick={onClose} />
        </header>

        <div>{item?.name ?? '-'}</div>
      </ModalContainer>
    </Modal>
  )
}
