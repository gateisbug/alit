import React from 'react';
import { useSetRecoilState } from 'recoil';

import { Search } from '@components';
import { debounce } from 'lodash';

import { searchStore } from '@domain/Item/store';

const ItemSearch = () => {
  const setSearchValue = useSetRecoilState(searchStore);

  const debouncedSetValue = React.useCallback(
    debounce((str: StateType<string>) => {
      setSearchValue(str);
      return str;
    }, 500),
    [],
  );

  return <Search setValue={debouncedSetValue} />;
};

export default React.memo(ItemSearch);
