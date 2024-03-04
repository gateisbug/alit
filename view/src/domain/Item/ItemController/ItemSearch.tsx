import React from 'react';
import { Search } from '@components';
import { useSetRecoilState } from 'recoil';
import { searchStore } from '@domain/Item/store';
import { debounce } from 'lodash';

const ItemSearch = () => {
  const setSearchValue = useSetRecoilState(searchStore);

  const debouncedSetValue = React.useCallback(
    debounce((str: string | ((str: string) => string)) => {
      setSearchValue(str);
      return str;
    }, 500),
    [],
  );

  return <Search setValue={debouncedSetValue} />;
};

export default React.memo(ItemSearch);
