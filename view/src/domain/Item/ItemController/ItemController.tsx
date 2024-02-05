import styled from 'styled-components';
import { ItemSearch, ItemFilter } from '@domain/Item';

const Container = styled.div`
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
