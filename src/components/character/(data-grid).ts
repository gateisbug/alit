import styled from 'styled-components'

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
`

export const GridCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-grow: 1;
`

export const GridRow = styled.div`
  display: flex;
  gap: 16px;

  transition: background-color 150ms ease-in-out;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      cursor: pointer;
      background-color: var(--lc-w);
    }
  }

  &[data-type='head'] {
    cursor: default;
    border-bottom: 1px solid var(--lc);
    background-color: transparent !important;
    padding: 16px 0;

    ${GridCell} {
      height: 32px;
    }
  }
  &[data-type='body'] {
    padding: 12px 0;
    border-bottom: 1px solid var(--lc-w);

    ${GridCell} {
      height: 112px;
    }
  }

  //grid-template-columns: 1:90 2:240 3:240 4:240 5:90 6:90 7:786;
  ${GridCell}:nth-of-type(1),
  ${GridCell}:nth-of-type(5),
  ${GridCell}:nth-of-type(6) {
    flex-basis: 90px;
  }
  ${GridCell}:nth-of-type(2),
  ${GridCell}:nth-of-type(3),
  ${GridCell}:nth-of-type(4) {
    flex-basis: 240px;
  }
  ${GridCell}:nth-of-type(7) {
    flex-basis: 786px;
  }

  ${GridCell}:nth-of-type(1) {
    min-width: 90px;
  }
  ${GridCell}:nth-of-type(2),
  ${GridCell}:nth-of-type(3), 
  ${GridCell}:nth-of-type(4) {
    min-width: 162px;
  }
  ${GridCell}:nth-of-type(5), 
  ${GridCell}:nth-of-type(6) {
    min-width: 72px;
  }
  ${GridCell}:nth-of-type(7) {
    min-width: 240px;
  }

  // (1)icon, (2)name, (3)stat, (4)tech, (5)nation, (6)category, (7)explain
  @media (max-width: 1200px) {
    // (1)icon, (2)name, (3)stat, (4)tech, (5)nation, (6)category
    ${GridCell}:nth-of-type(7) {
      display: none;
    }
  }
  @media (max-width: 900px) {
    // (1)icon, (2)name, (3)stat, (4)tech
    ${GridCell}:nth-of-type(5),
    ${GridCell}:nth-of-type(6) {
      display: none;
    }
  }
  @media (max-width: 680px) {
    // (1)icon, (2)name, (3)stat
    ${GridCell}:nth-of-type(4) {
      display: none;
    }
  }
  @media (max-width: 500px) {
    // (1)icon, (2)name
    ${GridCell}:nth-of-type(2) {
      min-width: 120px;
    }
    ${GridCell}:nth-of-type(3) {
      display: none;
    }
  }
`
