'use client'

import styled, { css } from 'styled-components'

import {
  type BadgeRootTransientProps,
  px,
  THEME,
  DEFAULT_PROPS,
  type BadgeProps,
  useBadge,
} from './preamble'

// noinspection JSUnresolvedReference
const BadgeBox = styled.span.attrs({
  className: px('box'),
})`
  position: relative;
  display: inline-block;
  width: fit-content;
  height: fit-content;
`

// noinspection JSUnresolvedReference
const BadgeRoot = styled.span.attrs({
  className: px('root'),
})<BadgeRootTransientProps>`
  position: absolute;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  width: fit-content;
  height: fit-content;
  font-weight: 500;

  transition:
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.onPrimary};

  // show
  display: ${({ $show }) => ($show ? 'flex' : 'none')};

  // variant
  ${(props) => {
    if (props.$variant === 'standard')
      return css`
        font-size: 0.75rem; // 12px
        padding: 0.25rem 0.5rem; // 4px 8px
        border-radius: 0.75rem; // 12px
      `
    return css`
      width: 0.5rem; // 8px
      height: 0.5rem; // 8px
      border-radius: 0.25rem; // 4px
    `
  }}

  // vertical | horizontal
  transform: ${({ $vertical, $horizontal }) => {
    if ($vertical === 'top')
      return $horizontal === 'right'
        ? 'translate(50%, -50%)'
        : 'translate(-50%, -50%)'
    return $horizontal === 'right'
      ? 'translate(50%, 50%)'
      : 'translate(-50%, 50%)'
  }};
  top: ${({ $vertical }) => ($vertical === 'top' ? '0' : 'auto')};
  bottom: ${({ $vertical }) => ($vertical === 'bottom' ? '0' : 'auto')};
  right: ${({ $horizontal }) => ($horizontal === 'right' ? '0' : 'auto')};
  left: ${({ $horizontal }) => ($horizontal === 'left' ? '0' : 'auto')};
`

BadgeRoot.defaultProps = {
  $show: DEFAULT_PROPS.show,
  $variant: DEFAULT_PROPS.variant,
  $vertical: DEFAULT_PROPS.vertical,
  $horizontal: DEFAULT_PROPS.horizontal,
  theme: THEME,
}

function BadgeComponent({
  show = DEFAULT_PROPS.show,
  variant = DEFAULT_PROPS.variant,
  vertical = DEFAULT_PROPS.vertical,
  horizontal = DEFAULT_PROPS.horizontal,
  max = DEFAULT_PROPS.max,
  theme = THEME,
  children,
  content,
}: BadgeProps) {
  const { contents } = useBadge({
    variant,
    content,
    max,
  })

  return (
    <BadgeBox>
      {children}
      <BadgeRoot
        $variant={variant}
        $show={show}
        $vertical={vertical}
        $horizontal={horizontal}
        theme={theme}
      >
        {contents}
      </BadgeRoot>
    </BadgeBox>
  )
}

const Badge = Object.assign(BadgeComponent, {
  Box: BadgeBox,
  Root: BadgeRoot,
  hook: useBadge,
})

export default Badge
