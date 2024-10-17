import styled from 'styled-components'

// noinspection CssUnresolvedCustomProperty
export const UIBadge = styled.span`
  position: absolute;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  background-color: var(--badge-bc, inherit);
`
