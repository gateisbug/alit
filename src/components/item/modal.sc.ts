// noinspection CssUnusedSymbol

import styled from 'styled-components'

import { ModalBody } from '@components/common'
import { Button } from '@ui'

export const ItemModalBody = styled(ModalBody)`
  min-width: 60rem;
  max-width: 60rem;

  gap: 3rem;
  padding: 1.5rem;

  /* @device: MobileL */
  @media (max-width: 425px) {
    padding: 1.5rem 1rem;
  }
  ///* @device: Laptop */
  //@media (max-width: 1024px) {
  //  min-width: 0;
  //  max-width: calc(100vw - 4rem);
  //}
  ///* @device: MobileL */
  //@media (max-width: 425px) {
  //  min-width: 0;
  //  max-width: calc(100vw - 2rem);
  //}
`
export const CloseButton = styled(Button.Root)`
  width: fit-content;
  height: fit-content;
  padding: 0;
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  color: var(--font-strong);
  &:not(:disabled):hover {
    color: var(--font);
  }
`

export const ModalHeader = styled.div.attrs({
  className: 'ui-modal-header',
})`
  display: grid;
  grid-template-columns: 6rem auto;
  grid-template-rows: auto;
  //justify-content: center;
  gap: 0 3rem;
  align-items: center;

  /* @device: Tablet */
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    gap: 1.5rem 0;
    justify-items: center;
  }

  .section {
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
    justify-content: center;
    line-height: inherit;
  }

  /* @device: Tablet */
  @media (max-width: 768px) {
    .section {
      align-items: center;
      gap: 0.75rem;
    }
  }
`

export const ModalSection = styled.div.attrs({
  className: 'ui-modal-section',
})``
