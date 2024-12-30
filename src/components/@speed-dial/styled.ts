import buttonStyle from '@parakeet/ui/button.style.ts'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SpeedDialButton = styled.button`
  ${buttonStyle};

  --button-bc: var(--primary);
  --button-fc: var(--on-primary);
  --button-lc: transparent;

  width: 56px;
  height: 56px;
  border-radius: 50%;

  box-shadow:
    rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0,
    rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  pointer-events: auto;

  & > svg {
    width: 24px;
    height: 24px;
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &[data-active='true'] > svg {
    transform: rotate(45deg);
    --button-bc: var(--primary-hover);
  }
`

export const SpeedDialRoot = styled.div`
  //--speeddial-z: 1050;
  z-index: 1050;
  display: flex;
  align-items: center;
  pointer-events: none;
  flex-direction: column-reverse;
  position: fixed;
  bottom: 16px;
  right: 16px;

  &:hover > ${SpeedDialButton} {
    --button-bc: var(--primary-hover);
  }
`

export const SpeedDialActions = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: -32px;
  padding-bottom: 48px;
  pointer-events: none;
  transition: top 0.2s linear;

  &[data-active='true'] {
    pointer-events: auto;
  }

  & > div {
    width: 48px;
    height: 48px;
  }
`

export const ActionButton = styled.button`
  ${buttonStyle};

  --button-bc: transparent;
  --button-fc: var(--primary);
  --button-lc: transparent;

  width: 48px;
  height: 48px;
  padding: 12px;
  border-radius: 12px;
  transition:
    transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(0);

  &[data-active='true'] {
    transform: scale(1);
  }
  &:hover {
    --button-bc: var(--bc);
  }
`

export const ActionExternLink = styled(ActionButton).attrs({
  as: 'a',
  rel: 'noopener noreferrer',
  target: '_blank',
})``

export const ActionLink = styled(ActionButton).attrs({
  as: Link,
})``
