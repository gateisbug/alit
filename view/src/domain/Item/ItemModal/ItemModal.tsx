import { Modal } from '@workspace/ui';
import { useRecoilState } from 'recoil';
import { modalItemStore, modalShowStore } from '@domain/Item/store';
import { ModalContainer } from '@domain/Item/ItemModal/styled';

const ItemModal = () => {
  const [selectedItem, setSelectedItem] = useRecoilState(modalItemStore);
  const [modalShow, setModalShow] = useRecoilState(modalShowStore);

  return (
    <Modal
      open={modalShow}
      onClickAway={() => {
        setModalShow(false);
        setSelectedItem(undefined);
      }}
      // theme={{ surface: '#242424' }}
      // style={{ maxWidth: 960 }}
    >
      <ModalContainer>
        <h1>{selectedItem?.name}</h1>
        <div className='card'>
          <p>{selectedItem?.obtain?.join('\n')}</p>
        </div>
        <p className='read-the-docs'>{selectedItem?.explain?.join('\n')}</p>
      </ModalContainer>
    </Modal>
  );
};

export default ItemModal;
