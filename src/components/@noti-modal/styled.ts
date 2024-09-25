import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
