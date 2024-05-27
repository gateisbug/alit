'use client'

import styled from 'styled-components'

import { px, THEME, RadioProps } from './preamble'

const RadioBox = styled.label.attrs({
  className: px('box'),
})`
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.25rem; // 4px
  cursor: pointer;

  &:has(input:disabled) {
    cursor: default;
  }
`

const RadioRoot = styled.input.attrs({
  className: px('root'),
})`
  display: none;
`
RadioRoot.defaultProps = {
  type: 'radio',
}

const RadioMark = styled.div.attrs({
  className: px('mark'),
})`
  position: relative;
  display: inline-flex;
  user-select: none;
  width: 1.5rem;
  height: 1.5rem;
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  input:not(:disabled):checked + & {
    color: ${({ theme }) => theme.primary};
  }

  & {
    @media (prefers-color-scheme: light) {
      color: ${({ theme }) => theme.default};
      input:disabled + & {
        color: ${({ theme }) => theme.disabled};
      }
    }
    /*noinspection CssUnresolvedCustomProperty*/
    @media (prefers-color-scheme: dark) {
      color: ${({ theme }) => theme.default};
      input:disabled + & {
        color: ${({ theme }) => theme.disabled};
      }
    }
  }

  & > svg {
    width: 1em;
    height: 1em;
    display: inline-block;
    flex-shrink: 0;
    font-size: 1.5rem;
  }
  & > svg:first-of-type {
    transform: scale(1);
  }
  & > svg:last-of-type {
    transform: scale(0);
    position: absolute;
    left: 0;
    transition: transform 150ms cubic-bezier(0.4, 0, 1, 1) 0ms;
  }
  input:not(:disabled):checked + & > svg:last-of-type {
    transform: scale(1);
  }
`
RadioMark.defaultProps = {
  theme: THEME,
}

function RadioComponent({ children, theme, ...rootProps }: RadioProps) {
  return (
    <RadioBox>
      <RadioRoot
        type='radio'
        checked={rootProps?.checked}
        disabled={rootProps?.disabled}
        defaultChecked={rootProps?.defaultChecked}
        name={rootProps?.name}
        onChange={rootProps?.onChange}
        required={rootProps?.require}
        readOnly={rootProps?.readOnly}
        value={rootProps?.value}
      />
      <RadioMark theme={theme}>
        <svg focusable='false' aria-hidden='true' viewBox='0 0 24 24'>
          <path
            d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
            fill='currentColor'
          />
        </svg>
        <svg focusable='false' aria-hidden='true' viewBox='0 0 24 24'>
          <path
            d='M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z'
            fill='currentColor'
          />
        </svg>
      </RadioMark>
      {children}
    </RadioBox>
  )
}

const Radio = Object.assign(RadioComponent, {
  Box: RadioBox,
  Root: RadioRoot,
  Mark: RadioMark,
})

export default Radio
