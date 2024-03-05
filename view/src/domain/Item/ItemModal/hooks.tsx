import { useRecoilState } from 'recoil';
import { modalItemStore } from '@domain/Item/store';
import { useCallback } from 'react';
import {
  classSorter,
  domainSorter,
  strokeSorter,
  typeSorter,
} from '@domain/Item/funcs';

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
    return [domain, classes, types];
  }, [selectedItem]);

  return { portrait: portraitOption, breadcrums: breadcrumsOption };
}
