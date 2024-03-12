import { ModalSection } from '@domain/Item/ItemModal/styled';

interface Props {
  selectedItem?: ItemInterface;
}

const ModalExplain = ({ selectedItem }: Props) => {
  return (
    <ModalSection className='status-explains'>
      <div className='status'>
        {selectedItem?.status?.map((v, i) => (
          <span key={`${selectedItem?.index}_${v}_${i}`}>{v}</span>
        ))}
      </div>
      <div className='explains'>{selectedItem?.explain?.join('\n')}</div>
    </ModalSection>
  );
};

export default ModalExplain;
