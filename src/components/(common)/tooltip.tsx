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
  cursor: default;
`

interface TooltipBoxProps {
  $title: ReactNode
}

// noinspection CssUnresolvedCustomProperty
export const TooltipBox = styled.div.attrs<TooltipBoxProps>((props) => ({
  children: (
    <div className='tooltop-text' data-placement='bottom'>
      {props.$title}
    </div>
  ),
  className: 'pos-a',
}))`
  z-index: 1500;
  pointer-events: auto;
  inset: 0 auto auto 0;
  margin: 0;

  @media (prefers-color-scheme: dark) {
    --tooltip-bc: rgba(97, 97, 97, 92);
    --tooltop-fc: #fff;
  }
  @media (prefers-color-scheme: light) {
    --tooltip-bc: rgba(97, 97, 97, 92);
    --tooltop-fc: #fff;
  }

  .tooltop-text {
    position: relative;
    background-color: var(--tooltip-bc);
    border-radius: 4px;
    color: var(--tooltop-fc);
    max-width: 300px;
    margin: 2px;
    overflow-wrap: break-word;

    &[data-placement='bottom'] {
      margin-top: 12px;
      transform-origin: center top;
    }

    &::before {
      content: '■';
      color: var(--tooltip-bc);
      display: block;
      position: absolute;
      top: 0;
      left: 50%;
      rotate: 45deg;
      width: fit-content;
      height: fit-content;
      font-size: 14px;
      border-radius: 2px;
      translate: -50% -50%;
      overflow: hidden;
      z-index: -1;
    }
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
            <TooltipBox ref={boxRef} $title={title}>
              {/* <TooltipText data-placement='bottom'>{title}</TooltipText> */}
            </TooltipBox>,
            document.body,
          )
        : null}
    </TooltipContainer>
  )
}
