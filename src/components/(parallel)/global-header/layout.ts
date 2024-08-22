import styled from 'styled-components'

export const Header = styled.header`
  background-color: var(--surface-main);
  border-bottom: 1px solid var(--lc-w);
  height: 52px;
  padding: 0 24px;
`

// noinspection CssUnusedSymbol
export const Logo = styled.h1`
  width: fit-content;

  #logo-img {
    height: 36px;
  }
`

export const InteractionArea = styled.div`
  gap: 8px;
`
