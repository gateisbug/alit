import { ModalSection } from '@domain/Item/ItemModal/styled';

interface Props {
  selectedItem?: ItemInterface;
}

const ModalObtain = ({ selectedItem }: Props) => {
  return (
    <ModalSection className='obtain-nation'>
      <div className='obtain'>
        <p>{selectedItem?.obtain?.join('\n')}</p>
      </div>
      <div className='nation'>{selectedItem?.nation}</div>
    </ModalSection>
  );
};

export default ModalObtain;
