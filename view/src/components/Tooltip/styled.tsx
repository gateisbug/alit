import styled from 'styled-components';

export const Container = styled.span.attrs({
  className: 'ui-tooltip-container',
})`
  position: relative;
  display: inline-block;
`;

export const Box = styled.div.attrs({
  className: 'ui-tooltip-box',
})`
  z-index: 1500;
  pointer-events: auto;

  position: absolute;
  inset: 0 auto auto 0;
  margin: 0;
`;

export const Text = styled.div.attrs({
  className: 'ui-tooltip-text',
})`
  position: relative;

  background-color: rgba(97, 97, 97, 0.92);
  border-radius: 4px;
  color: #fff;
  font-family: Pretendard, Inter, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
  padding: 4px 8px;
  font-size: 0.875rem;
  max-width: 300px;
  margin: 2px;
  overflow-wrap: break-word;
  font-weight: 500;

  &[data-placement='bottom'] {
    margin-top: 0.875rem;
    transform-origin: center top;
  }

  &::before {
    content: '■';
    color: rgba(97, 97, 97, 0.92);
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    rotate: 45deg;
    width: fit-content;
    height: fit-content;
    font-size: 0.875rem;
    border-radius: 2px;
    translate: -50% -50%;
    overflow: hidden;
  }
`;
