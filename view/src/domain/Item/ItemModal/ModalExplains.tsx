import { ModalSection } from '@domain/Item/ItemModal/styled';

interface Props {
  selectedItem?: ItemInterface;
}

const ModalExplain = ({ selectedItem }: Props) => {
  return (
    <ModalSection className='status-explains'>
      <div className='explains'>
        {selectedItem?.explain?.map((v, i) => <p key={i}>{v}</p>)}
      </div>
    </ModalSection>
  );
};

export default ModalExplain;
