import { CSSProperties, ReactNode } from 'react'
import styled from 'styled-components'

const TextBox = styled.div.attrs({
  className: 'imgcard-textbox',
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color: rgba(255, 255, 255, 0.8);
  color: #1c2025;

  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  cursor: default;
`

const Container = styled.div.attrs({
  className: 'imgcard-container',
})`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  //min-width: 15rem; /* 240 */
  //min-height: 8.75rem; /* 140 */

  border-radius: 0.25rem;
  overflow: hidden;
  box-sizing: border-box;

  &:hover ${TextBox} {
    opacity: 1;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`

export default function ImageCard(props: {
  src: string
  alt: string
  children?: ReactNode
  style?: CSSProperties
}) {
  const { src, children, alt, style } = props

  return (
    <Container style={style}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
      <TextBox>{children}</TextBox>
    </Container>
  )
}
