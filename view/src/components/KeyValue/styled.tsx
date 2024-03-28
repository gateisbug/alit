import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'ui-keyvalue-container',
})`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
`;

export const Box = styled.div.attrs({
  className: 'ui-keyvalue-box',
})`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 0.0625rem solid var(--border);
  border-radius: 0.25rem;
`;

export const IconBox = styled.div.attrs({
  className: 'ui-keyvalue-iconbox',
})`
  width: 1.5rem;
  height: 1.5rem;
`;

export const Span = styled.div.attrs({
  className: 'ui-keyvalue-span',
})`
  &[data-type='key'] {
    color: var(--font-weak);
    font-size: 1rem;
  }
  &[data-type='value'] {
    color: var(--font-strong);
    font-size: 1.125rem;
    text-align: center;
    display: inline-flex;
    align-items: center;
    height: 100%;
  }
`;
