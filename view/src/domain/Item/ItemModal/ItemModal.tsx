import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { CloseIcon } from '@icon';
import { Modal } from '@workspace/ui';

import ModalExplain from '@domain/Item/ItemModal/ModalExplains';
import { modalItemStore, modalShowStore } from '@domain/Item/store';

import ModalHeader from './ModalHeader';
import ModalObtain from './ModalObtain';
import { CloseButton, ModalContainer } from './styled';

const ItemModal = () => {
  const [selectedItem, setSelectedItem] = useRecoilState(modalItemStore);
  const [modalShow, setModalShow] = useRecoilState(modalShowStore);

  const closeHandler = useCallback(() => {
    setModalShow(false);
    setSelectedItem(undefined);
  }, []);

  return (
    <Modal open={modalShow} onClickAway={closeHandler}>
      <ModalContainer>
        <ModalHeader selectedItem={selectedItem} />

        <ModalObtain selectedItem={selectedItem} />

        <ModalExplain selectedItem={selectedItem} />

        <CloseButton $variant='text' onClick={closeHandler}>
          <CloseIcon />
        </CloseButton>
      </ModalContainer>
    </Modal>
  );
};

export default ItemModal;
