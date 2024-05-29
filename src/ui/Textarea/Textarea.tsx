import styled from 'styled-components'

import {
  TextareaProps,
  cx,
  THEME,
  DEFAULT_PROPS,
  useTextarea,
} from './preamble'

export const TextareaBox = styled.label.attrs({
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
TextareaBox.defaultProps = {
  theme: THEME,
}

export const TextareaRoot = styled.textarea.attrs({
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
  resize: none;
  overflow-y: hidden;

  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
  &:disabled {
    @media (prefers-color-scheme: light) {
      color: ${({ theme }) => theme.disabled.light};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({ theme }) => theme.disabled.dark};
    }
  }

  &:focus {
    border: none;
    outline: none;
  }
`

TextareaRoot.defaultProps = {
  rows: DEFAULT_PROPS.rows,
  theme: THEME,
}

function TextareaComponent({
  rows = DEFAULT_PROPS.rows,
  onChange,
  theme,
  autoResize = DEFAULT_PROPS.autoResize,
  maxHeight,
  ...rootProps
}: TextareaProps) {
  const { internalRef, resizeInChange } = useTextarea({
    onChange,
    autoResize,
    maxHeight,
  })

  return (
    <TextareaBox theme={theme}>
      <TextareaRoot
        rows={rows}
        theme={theme}
        ref={internalRef}
        onChange={resizeInChange}
        autoFocus={rootProps?.autoFocus}
        defaultValue={rootProps?.defaultValue}
        disabled={rootProps?.disabled}
        placeholder={rootProps?.placeholder}
        readOnly={rootProps?.readOnly}
        required={rootProps?.required}
        value={rootProps?.value}
      />
    </TextareaBox>
  )
}

const Textarea = Object.assign(TextareaComponent, {
  Box: TextareaBox,
  Root: TextareaRoot,
  hook: useTextarea,
})

export default Textarea
