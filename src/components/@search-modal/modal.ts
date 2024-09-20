import styled from 'styled-components'

import Modal from '@components/(common)/modal.tsx'

const ModalContainer = styled(Modal.Container).attrs({
  className: '',
})`
  width: 100%;
  max-width: 640px;
  padding: 0;
  border-radius: 8px;
  min-height: 640px;
  max-height: calc(100vh - 128px);
  //gap: 16px;
`

export default Object.assign(Modal, {
  Container: ModalContainer,
})
