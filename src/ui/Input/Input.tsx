import styled from 'styled-components'

import { THEME, cx, InputProps, DEFAULT_PROPS } from './preamble'

const InputBox = styled.label.attrs({
  className: cx('box'),
})`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.5rem; /* 8 */
  background-color: transparent;
  box-sizing: border-box;
  transition: border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: text;

  border: 0.0625rem solid transparent; /* 1 */
  border-radius: 0.25rem; /* 4 */
  padding: 0.75rem 1rem; /* 12 16 */

  &:has(:focus) {
    border-color: ${({ theme }) => theme.primary};
  }
  &:has(:disabled) {
    cursor: default;
  }

  & {
    @media (prefers-color-scheme: light) {
      border-color: ${({ theme }) => theme.border.light};
      &:has(:invalid) {
        border-color: ${({ theme }) => theme.invalid.light};
      }
    }
    @media (prefers-color-scheme: dark) {
      border-color: ${({ theme }) => theme.border.dark};
      &:has(:invalid) {
        border-color: ${({ theme }) => theme.invalid.dark};
      }
    }
  }
`
InputBox.defaultProps = {
  theme: THEME,
}

const InputRoot = styled.input.attrs({
  className: cx('root'),
})`
  display: inline-block;
  box-sizing: border-box;
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  font-size: 1rem; /* 16 */
  width: 100%;
  border: none;
  padding: 0;

  &:disabled {
    cursor: default;

    @media (prefers-color-scheme: light) {
      color: ${({ theme }) => theme.disabled.light};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({ theme }) => theme.disabled.dark};
    }
  }
  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }

  &:focus {
    border: none;
    outline: none;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button,
  &::-webkit-clear-button,
  &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`
InputRoot.defaultProps = {
  type: DEFAULT_PROPS.type,
  theme: THEME,
}

function InputComponent({ type = 'text', theme, ...rootProps }: InputProps) {
  return (
    <InputBox theme={theme}>
      <InputRoot
        type={type}
        theme={theme}
        autoFocus={rootProps?.autoFocus}
        defaultValue={rootProps?.defaultValue}
        disabled={rootProps?.disabled}
        onChange={rootProps?.onChange}
        pattern={rootProps?.pattern}
        placeholder={rootProps?.placeholder}
        readOnly={rootProps?.readOnly}
        required={rootProps?.required}
        value={rootProps?.value}
      />
    </InputBox>
  )
}

const Input = Object.assign(InputComponent, {
  Box: InputBox,
  Root: InputRoot,
})

export default Input
