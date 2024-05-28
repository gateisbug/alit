import { cx, THEME, TooltipProps, useTooltip } from '@ui/Tooltip/preamble'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

export const TooltipContainer = styled.span.attrs({
  className: cx('container'),
})`
  position: relative;
  display: inline-block;
`

export const TooltipBox = styled.div.attrs({
  className: cx('box'),
})`
  z-index: 1500;
  pointer-events: auto;

  position: absolute;
  inset: 0 auto auto 0;
  margin: 0;
`

export const TooltipText = styled.div.attrs({
  className: cx('text'),
})`
  position: relative;

  background-color: ${({ theme }) => theme.surface};
  border-radius: 0.25rem;
  color: #fff;
  font-size: 0.875rem;
  max-width: 18.75rem;
  margin: 0.125rem;
  overflow-wrap: break-word;

  &[data-placement='bottom'] {
    margin-top: 0.75rem;
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
    font-size: 0.875rem;
    border-radius: 0.125rem;
    translate: -50% -50%;
    overflow: hidden;
  }
`
TooltipText.defaultProps = {
  theme: THEME,
}

function TooltipComponent({ children, title, theme = THEME }: TooltipProps) {
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
              <TooltipText data-placement='bottom' theme={theme}>
                {title}
              </TooltipText>
            </TooltipBox>,
            document.body,
          )
        : null}
    </TooltipContainer>
  )
}

const Tooltip = Object.assign(TooltipComponent, {
  Container: TooltipContainer,
  Box: TooltipBox,
  Text: TooltipText,
  Hooks: useTooltip,
})

export default Tooltip
