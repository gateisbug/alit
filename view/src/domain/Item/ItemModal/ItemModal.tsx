import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { Breadcrumbs, Portrait } from '@components';
import { CloseIcon } from '@icon';
import { Modal } from '@workspace/ui';

import { modalItemStore, modalShowStore } from '@domain/Item/store';

import { useItemGunModal } from './hooks';
import {
  CloseButton,
  ModalContainer,
  ModalHeader,
  ModalSection,
} from './styled';

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

        <ModalSection className='obtain-nation'>
          <div className='obtain'>
            <p>{selectedItem?.obtain?.join('\n')}</p>
          </div>
          <div className='nation'>{selectedItem?.nation}</div>
        </ModalSection>

        <ModalSection className='status-explains'>
          <div className='status'>
            {selectedItem?.status?.map((v, i) => (
              <span key={`${selectedItem?.index}_${v}_${i}`}>{v}</span>
            ))}
          </div>
          <div className='explains'>{selectedItem?.explain?.join('\n')}</div>
        </ModalSection>

        <CloseButton $variant='text' onClick={closeHandler}>
          <CloseIcon />
        </CloseButton>
      </ModalContainer>
    </Modal>
  );
};

export default ItemModal;
