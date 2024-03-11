import React from 'react';
import styled from 'styled-components';

import { Logo } from '@components';

import ExternalLinkGroup from './ExternalLink';

const StyledHeader = styled.header.attrs({
  className: 'ui-header-root',
})`
  background-color: var(--main);
  height: fit-content;
  width: 100%;
`;

const HeaderWrap = styled.div.attrs({
  className: 'ui-header-wrap',
})`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const Header = () => {
  const headerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const sbWidth = window.innerWidth - document.documentElement.clientWidth;
    if (headerRef && headerRef.current) {
      headerRef.current.style.minWidth = `calc(100vw - ${sbWidth}px);`;
    }
  }, []);

  return (
    <StyledHeader ref={headerRef}>
      <HeaderWrap className='max-wrap'>
        <Logo />

        <ExternalLinkGroup />
      </HeaderWrap>
    </StyledHeader>
  );
};

export default Header;
