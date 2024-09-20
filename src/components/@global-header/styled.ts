import styled from 'styled-components'

export const Header = styled.header.attrs({
  className: 'flex jc-sb ai-c bb pos-f',
})`
  background-color: var(--surface-main);
  border-bottom: 1px solid var(--lc-w);
  height: 52px;
  padding: 0 24px;

  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(4px);
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
