import { UIModalContainer } from '@xui/modal.ts'
import styled from 'styled-components'

export const ModalContainer = styled(UIModalContainer).attrs({
  className: 'flex column',
})`
  --modal-surface: var(--surface);

  width: 100%;
  max-width: 640px;
  padding: 0;
  border-radius: 8px;
  min-height: 640px;
  max-height: calc(100vh - 128px);
  //gap: 16px;
`
