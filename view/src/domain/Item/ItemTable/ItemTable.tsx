import styled from 'styled-components';
import { Table } from '@components';

const COLUMNS = [
  { value: 'icon', label: '아이콘', basis: '90px', minWidth: '64px' },
  { value: 'name', label: '장비명', basis: '240px', minWidth: '160px' },
  { value: 'nickname', label: '별명', basis: '150px', minWidth: '100px' },
  { value: 'obtain', label: '획득처', basis: '240px', minWidth: '160px' },
  { value: 'nation', label: '국가', basis: '100px', minWidth: '60px' },
  { value: 'class', label: '구분', basis: '100px', minWidth: '60px' },
  { value: 'type', label: '종류', basis: '100px', minWidth: '60px' },
  { value: 'explain', label: '설명', basis: '468px', minWidth: '200px' },
];

const THead = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;

const Th = styled(Table.Cell)`
  font-family: Pretendard, Inter, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
  font-weight: 700;
  font-size: 1rem;
  line-height: 2rem;
  color: var(--font-strong);
`;

const Header = () => {
  return (
    <THead>
      <Table.Row>
        {COLUMNS.map((v) => (
          <Th key={v.value} style={{ flexBasis: v.basis, minWidth: v.minWidth }}>
            {v.label}
          </Th>
        ))}
      </Table.Row>
    </THead>
  );
};

const ItemTable = () => {
  return (
    <Table.Container>
      <Header />
      {/* <Table.Body></Table.Body> */}
    </Table.Container>
  );
};

export default ItemTable;
