import { Modal, ModalClose } from '@components/(common)/modal.tsx'
import { ModalContainer } from '@components/item/@item-modal.ts'

interface Props {
  open?: boolean
  onClose?: () => void
}

export default function ItemModal({ open, onClose }: Props) {
  // @TODO: Modal 구체화 해야함
  return (
    <Modal open={open} onClickAway={onClose}>
      <ModalContainer>
        <header className='flex jc-fe'>
          <ModalClose onClick={onClose} />
        </header>

        <div>Noti Modal</div>
      </ModalContainer>
    </Modal>
  )
}
