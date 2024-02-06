import styled from 'styled-components';
import { Logo } from '@components';
import ExternalLinkGroup from './ExternalLink';

const StyledHeader = styled.header`
  background-color: var(--main);
  height: fit-content;
`;

const HeaderWrap = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderWrap className='max-wrap'>
        <Logo />

        <ExternalLinkGroup />
      </HeaderWrap>
    </StyledHeader>
  );
};

export default Header;
