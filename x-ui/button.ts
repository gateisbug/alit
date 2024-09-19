import styled from 'styled-components'

// noinspection CssUnresolvedCustomProperty
export const UIButton = styled.button`
  font-family: inherit;

  display: inline-flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;

  user-select: none;
  cursor: pointer;
  transition:
    color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color: var(--button-bc, initial);
  color: var(--button-fc, inherit);
  border-color: var(--button-lc, initial);

  &:disabled {
    cursor: default;
  }

  //&:focus {
  //  outline: none;
  //}
`
