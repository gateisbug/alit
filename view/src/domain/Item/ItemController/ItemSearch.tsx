import React from 'react';
import styled from 'styled-components';
import { Search } from '@components';
import { Button } from '@workspace/ui';
import { SearchIcon } from '@icon';
import {useSetRecoilState} from 'recoil';
import {searchStore} from '@domain/Item/store';

const StyledButton = styled(Button)`
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  font-weight: 400;
  font-size: 1rem;
  font-family: Pretendard, Inter, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
`;

const ItemSearch = () => {
  const [mode, setMode] = React.useState(false);
  // const [value, setValue] = React.useState('');
  const setValue = useSetRecoilState(searchStore);

  const onClickButton = React.useCallback(() => {
    setMode(false);
  }, []);

  return mode ? (
    <Search
      setValue={setValue}
      autoFocus={true}
      onClickButton={onClickButton}
    />
  ) : (
    <StyledButton
      variant='text'
      onClick={() => {
        setMode(true);
      }}
    >
      <SearchIcon />
      검색
    </StyledButton>
  );
};

export default React.memo(ItemSearch);
