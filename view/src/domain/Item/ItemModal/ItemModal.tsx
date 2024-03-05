import { Modal } from '@workspace/ui';
import { useRecoilState } from 'recoil';
import { modalItemStore, modalShowStore } from '@domain/Item/store';
import { ModalContainer, ModalHeader } from './styled';
import { Breadcrumbs, Portrait } from '@components';
import { useItemGunModal } from './hooks';

const ItemModal = () => {
  const [selectedItem, setSelectedItem] = useRecoilState(modalItemStore);
  const [modalShow, setModalShow] = useRecoilState(modalShowStore);

  const { portrait, breadcrums } = useItemGunModal();

  return (
    <Modal
      open={modalShow}
      onClickAway={() => {
        setModalShow(false);
        setSelectedItem(undefined);
      }}
    >
      <ModalContainer>
        <ModalHeader>
          <Portrait {...portrait()} />
          <div className='section'>
            <h2 className='title fcs'>{selectedItem?.name}</h2>
            <p className='subtitle fcw'>{selectedItem?.nickname}</p>
            <Breadcrumbs texts={breadcrums()} />
          </div>
        </ModalHeader>

        <div className='card'>
          <p>{selectedItem?.obtain?.join('\n')}</p>
        </div>
        <p className='read-the-docs'>{selectedItem?.explain?.join('\n')}</p>
      </ModalContainer>
    </Modal>
  );
};

export default ItemModal;
