import styled from 'styled-components'

export const Header = styled.header.attrs({
  className: 'flex jc-sb ai-c bb',
})`
  background-color: var(--surface-main);
  border-bottom: 1px solid var(--lc-w);
  height: 52px;
  padding: 0 24px;
`

export const Logo = styled.h1.attrs({
  className: 'flex jc-c ai-c',
})`
  width: fit-content;
  & > img {
    height: 36px;
  }
`

export const Links = styled.nav.attrs({
  className: 'flex ai-c b2',
})`
  gap: 8px;
`
