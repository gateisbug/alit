import styled from 'styled-components';
import { Logo } from '@components';
import ExternalLinkGroup from './ExternalLink';

const StyledHeader = styled.header`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  background-color: var(--main);
  height: fit-content;
  padding: 0 2rem;
  box-sizing: border-box;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />

      <ExternalLinkGroup />
    </StyledHeader>
  );
};

export default Header;
