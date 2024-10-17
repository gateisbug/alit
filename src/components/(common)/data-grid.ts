import styled from 'styled-components'

// noinspection CssUnusedSymbol
export const GridContainer = styled.div.attrs({
  className: 'flex column',
})`
  user-select: none;
`

// noinspection CssUnusedSymbol
export const GridRow = styled.div.attrs({
  className: 'flex',
})`
  gap: 16px;
`

export const GridCell = styled.div.attrs({
  className: 'bb',
})`
  box-sizing: border-box;
  flex-grow: 1;
`
