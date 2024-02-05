import React from 'react';
import styled from 'styled-components';
import { Button } from '@workspace/ui';
import { FilterIcon } from '@icon';

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

const ItemFilter = () => {
  const [mode, setMode] = React.useState(false);

  return mode ? null : (
    <StyledButton
      variant='text'
      onClick={() => {
        setMode(true);
      }}
    >
      <FilterIcon />
      Filter
    </StyledButton>
  );
};

export default React.memo(ItemFilter);
