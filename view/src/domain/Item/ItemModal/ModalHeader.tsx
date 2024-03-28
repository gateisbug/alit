import { useCallback } from 'react';

import { Breadcrumbs, Portrait } from '@components';

import {
  classSorter,
  domainSorter,
  strokeSorter,
  typeSorter,
} from '@domain/Item/funcs';

import { ModalHeader as Container } from './styled';

interface Props {
  selectedItem?: ItemInterface;
}

const ModalHeader = ({ selectedItem }: Props) => {
  const portraitOption = useCallback(() => {
    return {
      src: `images/items/${selectedItem?.image}.png`,
      className: 'portrait',
      tier: selectedItem?.tier,
      stroke: strokeSorter(selectedItem?.type, selectedItem?.domain),
    };
  }, [selectedItem]);

  const breadcrumsOption = useCallback(() => {
    const domain = domainSorter(selectedItem?.domain);
    const classes = classSorter(selectedItem);
    const types = typeSorter(selectedItem);

    const result = [];
    if (domain.length > 0) result.push(domain);
    if (classes.length > 0) result.push(classes);
    if (types.length > 0) result.push(types);

    return result;
  }, [selectedItem]);

  return (
    <Container>
      <Portrait {...portraitOption()} />

      <div className='section'>
        <h2 className='title fcs fzl'>{selectedItem?.name}</h2>
        <p className='subtitle fcw fzp'>{selectedItem?.nickname}</p>
        <Breadcrumbs texts={breadcrumsOption()} />
      </div>
    </Container>
  );
};

export default ModalHeader;
