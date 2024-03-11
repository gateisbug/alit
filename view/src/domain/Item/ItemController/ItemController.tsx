import styled from 'styled-components';

import ItemFilter from './ItemFilter';
import ItemSearch from './ItemSearch';

const Container = styled.div.attrs({
  className: 'ui-itemcontroller-container',
})`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  min-height: 2.25rem;
  gap: 1rem;
`;

const ItemController = () => {
  return (
    <Container>
      <ItemSearch />
      <ItemFilter />
    </Container>
  );
};

export default ItemController;
