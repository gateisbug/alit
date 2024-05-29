// noinspection CssUnusedSymbol

import { ModalBody } from '@components/common'
import { Button } from '@ui'
import styled from 'styled-components'

export const ItemModalBody = styled(ModalBody)`
  min-width: 60rem; /* 960 */
  max-width: 60rem; /* 960 */
  width: 100%;

  @media (max-width: 980px) {
    min-width: unset;
    max-width: unset;
  }
  @media (max-width: 768px) {
    min-height: 30rem; /* 480 */
  }

  & .modal-container {
    display: flex;
    flex-flow: column nowrap;
    gap: 3rem; /* 48 */
    padding: 1.5rem; /* 24 */
    height: fit-content;
  }
`
export const CloseButton = styled(Button.Root)`
  width: fit-content;
  height: fit-content;
  padding: 0;
  position: absolute;
  top: 0.75rem; /* 12 */
  right: 0.75rem; /* 12 */
  color: var(--font-strong);
  &:not(:disabled):hover {
    color: var(--font);
  }
`

export const ModalHeader = styled.div`
  display: grid;
  grid-template-columns: 6rem auto; /* 96 auto */
  grid-template-rows: auto;
  gap: 0 3rem; /* 0 48 */
  align-items: center;

  /* @device: Tablet */
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    gap: 1.5rem 0; /* 24 0 */
    justify-items: center;
  }

  .section {
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem; /* 16 */
    justify-content: center;
    line-height: inherit;
  }

  /* @device: Tablet */
  @media (max-width: 768px) {
    .section {
      align-items: center;
      gap: 0.75rem; /* 12 */
    }
  }
`

export const ObtainSection = styled.div`
  display: grid;
  min-height: 8rem; /* 128 */
  grid-template-columns: 1fr 10rem; /* 1fr 160 */
  gap: 1rem; /* 16 */

  /* @device: Tablet */
  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
  }

  .obtain {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    gap: 1rem; /* 16 */

    /* @device: Tablet */
    @media (max-width: 700px) {
      flex-flow: column nowrap;
      align-items: center;
    }

    & .imgcard-container {
      width: fit-content;
      & > img {
        max-height: 10rem; /* 160 */
      }
    }
    & .imgcard-textbox {
      padding: 0.75rem; /* 12 */
    }
  }

  .nation {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    & .imgcard-container {
      width: 10rem; /* 160 */
      height: 10rem; /* 160 */
      padding: 0.75rem; /* 12 */
    }
  }
`

export const StatSection = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem; /* 16 */
  grid-template-rows: auto;

  .keyvalue-container {
    flex: 1 1 20%;
    max-width: 14rem; /* 224 */
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
    max-width: 20rem; /* 320 */
  }

  /* @device: Tablet */
  @media (max-width: 768px) {
    &,
    &[data-domain='antiair'],
    &[data-domain='aircraft'] {
      .keyvalue-container {
        flex: 1 1 25%;
        max-width: 14rem; /* 224 */
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
  gap: 0.5rem; /* 8 */
  border-radius: 0.25rem; /* 4 */
  border: 0.0625rem solid var(--border); /* 1 */
  padding: 1rem; /* 16 */
  line-height: 1.125rem; /* 18 */
`
