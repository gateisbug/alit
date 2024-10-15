import { ReactNode, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

export interface TooltipProps {
  children?: ReactNode
  title?: ReactNode
}

export const TooltipContainer = styled.span.attrs({
  className: 'pos-r',
})`
  display: inline-block;
`

export const TooltipBox = styled.div.attrs({
  className: 'pos-a',
})`
  z-index: 1500;
  pointer-events: auto;
  inset: 0 auto auto 0;
  margin: 0;
`

export const TooltipText = styled.div.attrs({
  className: 'pos-r b2',
})`
  background-color: rgba(97, 97, 97, 92);
  border-radius: 4px;
  color: #fff;
  max-width: 300px;
  margin: 2px;
  overflow-wrap: break-word;

  &[data-placement='bottom'] {
    margin-top: 12px;
    transform-origin: center top;
  }

  &::before {
    content: '■';
    color: ${({ theme }) => theme.surface};
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    rotate: 45deg;
    width: fit-content;
    height: fit-content;
    font-size: 0.875rem; /* 14 */
    border-radius: 0.125rem; /* 2 */
    translate: -50% -50%;
    overflow: hidden;
  }
`

export function useTooltip() {
  const containerRef = useRef<HTMLSpanElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useLayoutEffect(() => {
    if (!show || !containerRef?.current || !boxRef?.current) return
    const {
      top,
      left,
      height,
      width: w,
    } = containerRef.current.getBoundingClientRect()
    const { width } = boxRef.current.getBoundingClientRect()

    const translateX = left - width / 2 + w / 2
    const translateY = top + height + window.scrollY

    boxRef.current.setAttribute(
      'style',
      `transform: translate(${translateX}px, ${translateY}px)`,
    )
  }, [show])

  return {
    containerRef,
    boxRef,
    show,
    setShow,
  }
}

export default function Tooltip({ children, title }: TooltipProps) {
  const { boxRef, containerRef, show, setShow } = useTooltip()

  return (
    <TooltipContainer
      ref={containerRef}
      onMouseOver={() => {
        setShow(true)
      }}
      onMouseLeave={() => {
        setShow(false)
      }}
      onClick={() => {
        setShow(!show)
      }}
    >
      {children}
      {show
        ? createPortal(
            <TooltipBox ref={boxRef}>
              <TooltipText data-placement='bottom'>{title}</TooltipText>
            </TooltipBox>,
            document.body,
          )
        : null}
    </TooltipContainer>
  )
}
