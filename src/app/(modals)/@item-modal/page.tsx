import { Modal, ModalClose } from '@components/(common)/modal/index.ts'
import { ModalContainer } from '@components/item/@item-modal.ts'
import { useItemModalStore } from '@util/store/item.ts'

interface Props {
  onClose: () => void
}

export default function ItemModal({ onClose }: Props) {
  const { select } = useItemModalStore()

  // @TODO: Modal 구체화 해야함
  return (
    <Modal open={select !== undefined} onClickAway={onClose}>
      <ModalContainer>
        <header className='flex jc-fe'>
          <ModalClose onClick={onClose} />
        </header>

        <div>{select?.name ?? '-'}</div>
      </ModalContainer>
    </Modal>
  )
}
