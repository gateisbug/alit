import styled from 'styled-components'

import Modal from '@components/(common)/modal.tsx'

const ModalContainer = styled(Modal.Container).attrs({
  className: 'pos-r',
})`
  width: 100%;
  max-width: 640px;
  padding: 0;
  border-radius: 8px;
  max-height: 640px;
  //gap: 16px;
`

export default Object.assign(Modal, {
  Container: ModalContainer,
})
