import styled from 'styled-components';

export interface IconBoxProps {
  width?: string;
  height?: string;
}

export const IconBox = styled.div<IconBoxProps>`
  width: ${(props) => props.width};
  min-width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-height: ${(props) => props.width};
`;
IconBox.defaultProps = {
  width: '1.5rem',
  height: '1.5rem',
};
