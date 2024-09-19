import Modal from '@components/(common)/modal.tsx'

interface Props {
  open?: boolean
  onClose?: () => void
}

export default function NotiModal({ open, onClose }: Props) {
  // @TODO: Modal 구체화 해야함
  return (
    <Modal open={open} onClickAway={onClose}>
      <Modal.Container>
        <header className='flex jc-fe'>
          <Modal.Close onClick={onClose} />
        </header>

        <div>Noti Modal</div>
      </Modal.Container>
    </Modal>
  )
}
