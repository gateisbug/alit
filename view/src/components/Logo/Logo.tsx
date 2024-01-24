import styled from 'styled-components';

const LogoBox = styled.h1`
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
`;

const LogoImage = styled.img`
  height: 2rem;
`;

const Logo = () => {
  return (
    <LogoBox>
      <LogoImage src='/assets/logo.webp' alt='' />
    </LogoBox>
  );
};

export default Logo;
