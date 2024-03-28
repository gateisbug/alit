import styled from 'styled-components';

const LogoBox = styled.h1.attrs({
  className: 'ui-logo-box',
})`
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
`;

const LogoImage = styled.img.attrs({
  className: 'ui-logo-img',
})`
  height: 2rem;
  width: 6.75rem;
`;

const Logo = () => {
  return (
    <LogoBox>
      <LogoImage src='/alit/assets/logo.webp' alt='' />
    </LogoBox>
  );
};

export default Logo;
