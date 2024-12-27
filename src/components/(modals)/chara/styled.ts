// noinspection CssUnusedSymbol

import { modalContainer } from '@parakeet/ui/modal.style.ts'
import styled from 'styled-components'

export const ModalContainer = styled.section`
  ${modalContainer};
  --modal-bc: var(--surface);
  --modal-shadow: 8px 12px 32px 0 rgba(0, 0, 51, 0.16);

  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  width: 100%;
  max-width: 740px;
  max-height: calc(100vh - 160px);
  padding: 32px;
  border-radius: 8px;
`

export const CharaPortrait = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 208px;
  height: 272px;
`

export const CharaDataSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`

export const BorderBox = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid var(--lc);
  box-sizing: border-box;

  .box-data {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .data-row {
    display: flex;
    gap: 12px;
  }

  .data-head {
    display: flex;
    justify-content: center;
    width: 48px;
    min-width: 48px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 440px;
  }
  @media (max-width: 425px) {
    flex-direction: column;
  }
`

export const CharaModalContents = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  height: fit-content;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    & ${CharaDataSection} {
      align-items: center;
    }
  }
`

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  & > button {
    width: 40px;
    height: 40px;
    padding: 10px;
    z-index: 1;
  }
`
