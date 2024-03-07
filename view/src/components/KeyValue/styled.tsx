import styled from 'styled-components';

export const KeyValueContainer = styled.div.attrs({
  className: 'ui-keyvalue-container',
})`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
`;

export const KeyValueBox = styled.div.attrs({
  className: 'ui-keyvalue-box',
})`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.25rem;
`;

export const KeyValueIconBox = styled.div.attrs({
  className: 'ui-keyvalue-iconbox',
})`
  width: 1.5rem;
  height: 1.5rem;
`;

export const KeyValueSpan = styled.div.attrs({
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
