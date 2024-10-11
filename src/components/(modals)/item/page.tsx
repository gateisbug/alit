import { ModalClose } from '@components/(common)/modal.styled.tsx'
import { ModalContainer } from '@components/(modals)/item/styled.ts'
import useModalStore from '@util/store/modal.ts'

import { ITEMMODALKEY } from '../(modal-keys).ts'

interface Props {
  item: ItemInterface
}

export default function ItemModal({ item }: Props) {
  const { modalClose } = useModalStore()

  const onClose = () => {
    modalClose(ITEMMODALKEY)
  }

  // @TODO: Modal 구체화 해야함
  return (
    <ModalContainer>
      <header className='flex jc-fe'>
        <ModalClose onClick={onClose} />
      </header>

      <div>{item?.name ?? '-'}</div>
    </ModalContainer>
  )
}
