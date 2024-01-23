import styled from 'styled-components';

const LogoBox = styled.h1`
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: 0.375rem;
`;

const LogoImage = styled.img`
  height: 2.625rem;
`;

const Logo = () => {
  return (
    <LogoBox>
      <LogoImage />
    </LogoBox>
  );
};

export default Logo;
