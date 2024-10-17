import { UIModalContainer } from '@xui/modal.ts'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ModalContainer = styled(UIModalContainer).attrs({
  className: 'pos-r',
})`
  --modal-surface: var(--surface);

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
