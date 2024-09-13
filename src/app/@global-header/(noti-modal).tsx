import {
  default as Modal,
  ModalContainer,
  ModalClose,
} from '@components/(common)/modal.tsx'

interface Props {
  open?: boolean
  onClose?: () => void
}

export default function NotiModal({ open, onClose }: Props) {
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
