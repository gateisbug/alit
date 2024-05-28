// noinspection CssUnusedSymbol

import { ModalBody } from '@components/common'
import { Button } from '@ui'
import styled from 'styled-components'

export const ItemModalBody = styled(ModalBody)`
  min-width: 60rem;
  max-width: 60rem;
  width: 100%;

  @media (max-width: 980px) {
    min-width: unset;
    max-width: unset;
  }

  & .modal-container {
    //& > div {
    //  margin-bottom: 3rem;
    //}
    //& > div:last-child {
    //  margin-bottom: 0;
    //}

    display: flex;
    flex-flow: column nowrap;
    gap: 3rem;
    padding: 1.5rem;
    height: fit-content;
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

export const ModalHeader = styled.div`
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

export const ObtainSection = styled.div`
  display: grid;
  min-height: 8rem;
  grid-template-columns: 1fr 10rem;
  gap: 1rem;

  /* @device: Tablet */
  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
  }

  .obtain {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    gap: 1rem;

    /* @device: Tablet */
    @media (max-width: 700px) {
      flex-flow: column nowrap;
      align-items: center;
    }

    & .imgcard-container {
      width: fit-content;
      & > img {
        max-height: 10rem;
      }
    }
    & .imgcard-textbox {
      padding: 0.75rem;
    }
  }

  .nation {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    & .imgcard-container {
      width: 10rem;
      height: 10rem;
      padding: 0.75rem;
    }
  }
`

export const StatSection = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
  grid-template-rows: auto;

  .keyvalue-container {
    flex: 1 1 20%;
    max-width: 14rem;
  }
  .keyvalue-box {
    width: 100%;
    align-items: center;
  }
  &[data-domain='antiair'] .keyvalue-container {
    flex: 1 1 16%;
  }
  &[data-domain='aircraft'],
  &[data-domain='accessory'] {
    .keyvalue-container {
      flex: 1 1 30%;
    }
  }
  &[data-domain='accessory'] .keyvalue-container {
    max-width: 20rem;
  }

  /* @device: Tablet */
  @media (max-width: 768px) {
    &,
    &[data-domain='antiair'],
    &[data-domain='aircraft'] {
      .keyvalue-container {
        flex: 1 1 25%;
        max-width: 14rem;
      }
    }
    &[data-domain='accessory'] .keyvalue-container {
      flex: 1 1 33%;
      max-width: 100%;
    }
  }

  /* @device: MobileL */
  @media (max-width: 425px) {
    &,
    &[data-domain='antiair'],
    &[data-domain='aircraft'],
    &[data-domain='accessory'] {
      .keyvalue-container {
        flex: 1 1 33%;
        max-width: 100%;
      }
    }
  }

  /* @device: MobileM */
  @media (max-width: 375px) {
    &,
    &[data-domain='antiair'],
    &[data-domain='aircraft'],
    &[data-domain='accessory'] {
      .keyvalue-container {
        flex: 1 1 100%;
        max-width: 100%;
      }
    }
  }
`

export const ExplainSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid var(--border);
  padding: 1rem;
  line-height: 1.125rem;
`
