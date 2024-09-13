import { Modal, ModalContainer, ModalClose } from '@components/(common)'

interface Props {
  open?: boolean
  onClose?: () => void
}

export default function SearchModal({ open, onClose }: Props) {
  // @TODO: Modal 구체화 해야함
  return (
    <Modal open={open} onClickAway={onClose}>
      <ModalContainer>
        <header className='flex jc-fe'>
          <ModalClose onClick={onClose} />
        </header>

        <div>Search Modal</div>
      </ModalContainer>
    </Modal>
  )
}
