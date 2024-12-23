import { modalContainer } from '@parakeet/ui/modal.style.ts'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ModalContainer = styled.section.attrs({
  className: 'pos-r',
})`
  ${modalContainer};
  --modal-bc: var(--surface);
  --modal-shadow: 8px 12px 32px 0 rgba(0, 0, 51, 0.16);

  width: 100%;
  height: fit-content;
  max-width: 640px;
  max-height: 640px;
  padding: 0;
  border-radius: 8px;
  //gap: 16px;
`

export const ModalHeader = styled.header.attrs({
  className: 'pos-a',
})`
  //gap: 16px;
  padding: 8px;
  top: 0;
  right: 0;
`

export const ModalBody = styled.div.attrs({
  className: 'flex column bb',
})`
  width: 100%;
  min-height: 120px;
  padding: 32px;
  gap: 12px;
  justify-content: flex-start;
`

export const ReleaseLink = styled(Link).attrs({
  children: 'Release',
  rel: 'noopener noreferrer',
  target: '_blank',
})`
  display: block;
  width: fit-content;
`

export const ChangeLog = styled.ul.attrs({
  className: 'flex column fcs',
})`
  list-style: circle;
  padding-left: 32px;
  gap: 4px;
`
