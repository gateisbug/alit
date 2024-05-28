import styled from 'styled-components'

import { px, ScrollviewProps } from './preamble'

const ScrollviewRoot = styled.div.attrs({
  className: px('root'),
})`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: auto;
  box-sizing: border-box;
`

function ScrollviewComponent({ children }: ScrollviewProps) {
  return <ScrollviewRoot>{children}</ScrollviewRoot>
}

const Scrollview = Object.assign(ScrollviewComponent, {
  Root: ScrollviewRoot,
})

export default Scrollview
