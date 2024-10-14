import { UIModalContainer } from '@xui/modal.ts'
import styled from 'styled-components'

import { PortraitFrame } from '@components/(common)/portrait.tsx'

export const ModalContainer = styled(UIModalContainer).attrs({
  className: 'flex column',
})`
  --modal-surface: var(--surface);

  width: 100%;
  max-width: 960px;
  max-height: 960px;
  height: calc(100vh - 128px);
  padding: 0;
  border-radius: 8px;
  //gap: 16px;
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
`

export const Header = styled.header.attrs({
  className: 'grid ai-c',
})`
  grid-template-columns: 96px auto;
  grid-template-rows: auto;
  gap: 0 32px;

  ${PortraitFrame} {
    height: 96px;
  }
`

export const TitleSection = styled.div.attrs({
  className: 'flex column jc-c',
})`
  gap: 10px;
`

export const ObtainSection = styled.div.attrs({
  className: 'grid',
})`
  min-height: 128px;
  grid-template-columns: 1fr 160px;
  gap: 16px;
`

export const Obtain = styled.div.attrs({
  className: 'flex jc-c',
})`
  gap: 16px;

  img {
    min-height: 160px;
    max-height: 160px;
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

export const StatSection = styled.div.attrs({
  className: 'flex jc-c',
})`
  flex-flow: row wrap;
  gap: 16px;

  .keyvalue-container {
    flex: 1 1 20%;
    max-width: 224px; /* 224 */
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
    max-width: 320px; /* 320 */
  }
`
