import styled from 'styled-components'

import {
  GridCell as UICell,
  GridRow as UIRow,
  GridContainer as UIContainer,
} from '@components/(common)'

export const GridContainer = styled(UIContainer)``

export const GridCell = styled(UICell).attrs({
  className: 'flex al-c'
})`
  height: 64px;
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
    border-bottom: 2px solid var(--lc);
    background-color: transparent !important;

    ${GridCell} {
      padding: 16px 0;
      height: fit-content;
      text-align: center;
    }
  }
  &[data-type='body'] {
    padding: 8px;
  }

  //grid-template-columns: 1:120 2:240 3:160 4:240 5:120 6:120 7:120 8:640;
  ${GridCell}:nth-of-type(1),
  ${GridCell}:nth-of-type(5),
  ${GridCell}:nth-of-type(6),
  ${GridCell}:nth-of-type(7) {
    flex-basis: 90px;
    min-width: 90px;
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
`
