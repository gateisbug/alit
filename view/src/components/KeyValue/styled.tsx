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
  padding: 0.25rem 0.5rem;
  border: 0.0625rem solid ;
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
    font-size: 0.875rem;
  }
  &[data-type='value'] {
    color: var(--font);
    font-size: 1.125rem;
    font-weight: 500;
  }
`;
