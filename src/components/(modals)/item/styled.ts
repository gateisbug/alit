// noinspection CssUnusedSymbol

import { UIModalContainer } from '@xui/modal.ts'
import styled from 'styled-components'

import { PortraitFrame } from '@components/(common)/portrait.tsx'

export const ModalContainer = styled(UIModalContainer).attrs({
  className: 'flex column',
})`
  --modal-surface: var(--surface);

  width: 100%;
  max-width: 960px;
  max-height: calc(100vh - 128px);
  padding: 0;
  border-radius: 8px;
`

export const ItemModalHeader = styled.div.attrs({
  className: 'flex jc-fe',
})`
  height: 24px;

  & > button {
    width: 40px;
    height: 40px;
    padding: 10px;
    z-index: 1;
  }
`

export const ItemModalBody = styled.div.attrs({
  className: 'flex column',
})`
  padding: 0 24px 24px;
  gap: 48px;
  overflow-y: auto;

  @media (max-width: 768px) {
    gap: 32px;
  }
  @media (max-width: 480px) {
    gap: 24px;
  }
  @media (max-width: 480px) {
    gap: 24px;
  }
`

export const TitleSection = styled.div.attrs({
  className: 'flex column jc-c',
})`
  gap: 10px;
`

export const Header = styled.header.attrs({
  className: 'grid ai-c',
})`
  grid-template-columns: 96px auto;
  grid-template-rows: auto;
  gap: 0 32px;

  ${PortraitFrame} {
    width: 96px;
    height: 96px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    gap: 24px;

    ${TitleSection} {
      align-items: center;
    }
  }
`

export const Obtain = styled.div.attrs({
  className: 'grid jc-c obtain',
})`
  gap: 16px;

  grid-auto-flow: column;
  grid-auto-columns: minmax(200px, 440px);

  img {
    min-height: 160px;
    max-height: 160px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 440px));
    grid-auto-flow: unset;
    grid-auto-columns: unset;
  }
  @media (max-width: 480px) {
    gap: 12px;
  }
`

export const Nation = styled.div.attrs({
  className: 'flex jc-c',
})`
  img {
    width: 160px;
    height: 160px;
  }
`

export const ObtainSection = styled.div.attrs({
  className: 'grid',
})`
  //min-height: 128px;
  grid-template-columns: auto 160px;
  gap: 16px;

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  @media (max-width: 480px) {
    gap: 12px;
  }
`

export const StatSection = styled.div.attrs({
  className: 'grid',
})`
  grid-auto-flow: row;
  gap: 12px;

  &[data-length='1'],
  &[data-length='3'],
  &[data-length='5'] {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  &[data-length='2'],
  &[data-length='4'],
  &[data-length='6'] {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  .keyvalue > div {
    line-height: 1em !important;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`

export const ExplainSection = styled.div.attrs({
  className: 'flex column b1',
})`
  border-radius: 4px;
  border: 1px solid var(--lc);
  padding: 12px;
`
