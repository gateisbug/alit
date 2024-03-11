import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import {
  classSorter,
  domainSorter,
  strokeSorter,
  typeSorter,
} from '@domain/Item/funcs';
import { modalItemStore } from '@domain/Item/store';

export function useItemGunModal() {
  const [selectedItem] = useRecoilState(modalItemStore);

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

  return { portrait: portraitOption, breadcrums: breadcrumsOption };
}
