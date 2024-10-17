import styled from 'styled-components'

import {
  GridCell as UICell,
  GridRow as UIRow,
  GridContainer as UIContainer,
} from '@components/(common)/data-grid.ts'

export const GridContainer = styled(UIContainer)``

export const GridCell = styled(UICell).attrs({
  className: 'flex ai-c',
})`
  min-height: 64px;
`

export const GridRow = styled(UIRow)`
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

    ${GridCell} {
      padding: 16px 0;
      height: fit-content;
      text-align: center;
    }
  }
  &[data-type='body'] {
    padding: 12px 0;
    border-bottom: 1px solid var(--lc-w);
  }

  //grid-template-columns: 1:90 2:240 3:160 4:240 5:90 6:90 7:90 8:743;
  ${GridCell}:nth-of-type(1),
  ${GridCell}:nth-of-type(5),
  ${GridCell}:nth-of-type(6),
  ${GridCell}:nth-of-type(7) {
    flex-basis: 90px;
  }
  ${GridCell}:nth-of-type(2),
  ${GridCell}:nth-of-type(4) {
    flex-basis: 240px;
  }
  ${GridCell}:nth-of-type(3) {
    flex-basis: 160px;
  }
  ${GridCell}:nth-of-type(8) {
    flex-basis: 743px;
  }

  ${GridCell}:nth-of-type(1) {
    min-width: 90px;
  }
  ${GridCell}:nth-of-type(2) {
    min-width: 178px;
  }
  ${GridCell}:nth-of-type(3) {
    min-width: 98px;
  }
  ${GridCell}:nth-of-type(4) {
    min-width: 162px;
  }
  ${GridCell}:nth-of-type(5) {
    min-width: 32px;
  }
  ${GridCell}:nth-of-type(6) {
    min-width: 68px;
  }
  ${GridCell}:nth-of-type(7) {
    min-width: 72px;
  }

  @media (max-width: 1200px) {
    ${GridCell}:nth-of-type(5),
    ${GridCell}:nth-of-type(6),
    ${GridCell}:nth-of-type(7) {
      display: none;
    }
  }
  //@COMMENT: (1)icon, (2)name, (3)nickname, (4)obtain, (5)nation, (6)category, (7)type, (8)explain
  @media (max-width: 900px) {
    ${GridCell}:nth-of-type(5),
    ${GridCell}:nth-of-type(6),
    ${GridCell}:nth-of-type(7) {
      display: none;
    }
  }
  @media (max-width: 900px) {
    ${GridCell}:nth-of-type(4) {
      display: none;
    }
  }
  @media (max-width: 700px) {
    ${GridCell}:nth-of-type(3) {
      display: none;
    }
  }
  @media (max-width: 550px) {
    ${GridCell}:nth-of-type(8) {
      display: none;
    }
  }
  @media (max-width: 440px) {
    ${GridCell}:nth-of-type(2) {
      min-width: 120px;
    }
  }
`
