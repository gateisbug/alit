import styled from 'styled-components'

// noinspection CssUnusedSymbol
export const GridContainer = styled.div.attrs({
  className: 'flex column',
})`
  //& > .grid-empty {
  //  display: flex;
  //  align-items: center;
  //  justify-content: center;
  //  padding: 24px 0;
  //  min-height: 240px;
  //}
`

export const GridCell = styled.div.attrs({
  className: 'bb',
})`
  box-sizing: border-box;
  flex-grow: 1;
`

// noinspection CssUnusedSymbol
export const GridRow = styled.div.attrs({
  className: 'flex',
})`
  gap: 16px;
`

// export interface GridProps<T> {
//   headers?: Record<string, string>[]
//   data?: Array<T>
//   onClickRow?: (v: T) => void
// }
//
// export const renderPending = (isPending: boolean, failCase: string) => {
//   if (isPending) return <Loader />
//   return failCase
// }
