import React from 'react';
import styled from 'styled-components';
import { Search } from '@components';
import { Button } from '@workspace/ui';
import { SearchIcon } from '@icon';

const StyledButton = styled(Button)`
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  font-weight: 500;
  font-size: 1rem;
  font-family: Pretendard, Inter, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
`;

const ItemSearch = () => {
  const [mode, setMode] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [items] = React.useState([{ render: 'Hello' }]);

  React.useEffect(() => {
    console.log(value);
  }, [value]);

  return mode ? (
    <Search setValue={setValue} items={items} />
  ) : (
    <StyledButton
      variant='text'
      onClick={() => {
        setMode(true);
      }}
    >
      <SearchIcon />
      Search
    </StyledButton>
  );
};

export default React.memo(ItemSearch);
