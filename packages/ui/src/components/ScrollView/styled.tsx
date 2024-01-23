import styled from 'styled-components';
import { px } from './preamble';

export const ScrollviewRoot = styled.div.attrs({
  className: px('Root'),
})`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: auto;
  box-sizing: border-box;
`;
