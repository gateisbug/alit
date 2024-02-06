import styled from 'styled-components';
import ItemSearch from './ItemSearch';
import ItemFilter from './ItemFilter';

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
