import { Modal } from '@workspace/ui';
import { useRecoilState } from 'recoil';
import { modalItemStore, modalShowStore } from '@domain/Item/store';
import { CloseButton, ModalContainer, ModalHeader } from './styled';
import { Breadcrumbs, Portrait } from '@components';
import { useItemGunModal } from './hooks';
import { useCallback } from 'react';
import { CloseIcon } from '@icon';

const ItemModal = () => {
  const [selectedItem, setSelectedItem] = useRecoilState(modalItemStore);
  const [modalShow, setModalShow] = useRecoilState(modalShowStore);

  const { portrait, breadcrums } = useItemGunModal();

  const closeHandler = useCallback(() => {
    setModalShow(false);
    setSelectedItem(undefined);
  }, []);

  return (
    <Modal open={modalShow} onClickAway={closeHandler}>
      <ModalContainer>
        <ModalHeader>
          <Portrait {...portrait()} />
          <div className='section'>
            <h2 className='title fcs fzl'>{selectedItem?.name}</h2>
            <p className='subtitle fcw fzp'>{selectedItem?.nickname}</p>
            <Breadcrumbs texts={breadcrums()} />
          </div>
        </ModalHeader>

        <div className='card'>
          <p>{selectedItem?.obtain?.join('\n')}</p>
        </div>
        <p className='read-the-docs'>{selectedItem?.explain?.join('\n')}</p>

        <CloseButton $variant='text' onClick={closeHandler}>
          <CloseIcon />
        </CloseButton>
      </ModalContainer>
    </Modal>
  );
};

export default ItemModal;
