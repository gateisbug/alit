import React from 'react';
import { Search } from '@components';
import { useSetRecoilState } from 'recoil';
import { searchStore } from '@domain/Item/store';

const ItemSearch = () => {
  const setValue = useSetRecoilState(searchStore);
  return <Search setValue={setValue} />;
};

export default React.memo(ItemSearch);
