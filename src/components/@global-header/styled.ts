import styled from 'styled-components'

export const Header = styled.header.attrs({
  className: 'flex jc-sb ai-c bb pos-s',
})`
  //background-color: var(--surface-main);
  backdrop-filter: blur(8px);
  //border-bottom: 1px solid var(--lc-w);
  height: 60px;
  padding: 0 24px;

  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  //backdrop-filter: blur(4px);
`

export const SearchArea = styled.div.attrs({
  className: 'flex ai-c bb',
})`
  flex-grow: 1;
  padding-left: 48px;
  padding-right: 64px;

  @media (max-width: 768px) {
    padding-left: 24px;
    padding-right: 0;
  }
`

export const Logo = styled.h1.attrs({
  className: 'flex jc-c ai-c',
})`
  width: fit-content;
  user-select: none;
`

export const Links = styled.nav.attrs({
  className: 'flex ai-c b2',
})`
  gap: 8px;
`
