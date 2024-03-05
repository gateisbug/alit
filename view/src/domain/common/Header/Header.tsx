import styled from 'styled-components';
import { Logo } from '@components';
import ExternalLinkGroup from './ExternalLink';

const StyledHeader = styled.header.attrs({
  className: 'ui-header-root',
})`
  background-color: var(--main);
  height: fit-content;
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
  return (
    <StyledHeader className='window'>
      <HeaderWrap className='max-wrap'>
        <Logo />

        <ExternalLinkGroup />
      </HeaderWrap>
    </StyledHeader>
  );
};

export default Header;
