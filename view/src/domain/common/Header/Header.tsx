import styled from 'styled-components';
import { Logo } from '@components';

const StyledHeader = styled.header`
  display: flex;
  flex-flow: row;
  align-items: center;
  background-color: var(--main);
  height: fit-content;
  padding: 0 2rem;
  box-sizing: border-box;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
};

export default Header;
