import styled from 'styled-components'

import { CheckProps, DEFAULT_PROPS, cx, THEME } from './preamble'

// noinspection JSUnresolvedReference
const CheckBox = styled.label.attrs({
  className: cx('box'),
})`
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.25rem; /* 4 */
  cursor: pointer;

  &:has(input:disabled) {
    cursor: default;
  }
`

// noinspection JSUnresolvedReference
const CheckRoot = styled.input.attrs({
  className: cx('root'),
})`
  display: none;
`
CheckRoot.defaultProps = {
  type: DEFAULT_PROPS.type,
}

// noinspection JSUnresolvedReference,CssUnknownProperty
const CheckMark = styled.div.attrs({
  className: cx('mark'),
})`
  display: inline-block;
  width: 1.5rem; /* 24 */
  height: 1.5rem; /* 24 */
  user-select: none;
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  input:not(:disabled):checked + & {
    color: ${({ theme }) => theme.primary};
  }

  & {
    @media (prefers-color-scheme: light) {
      color: ${({ theme }) => theme.default.light};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({ theme }) => theme.default.dark};
    }
  }
  input:disabled + & {
    @media (prefers-color-scheme: light) {
      color: ${({ theme }) => theme.disabled.light};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({ theme }) => theme.disabled.dark};
    }
  }

  input:not(:checked) + & path {
    d: path(
      'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'
    );
  }
  input:checked + & path {
    d: path(
      'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
    );
  }
  input[multiple]:checked + & path {
    d: path(
      'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z'
    );
  }
`
CheckMark.defaultProps = {
  theme: THEME,
}

function CheckComponent({
  children,
  theme,
  ...rootProps
}: CheckProps) {
  return (
    <CheckBox>
      <CheckRoot
        type='checkbox'
        checked={rootProps?.checked}
        disabled={rootProps?.disabled}
        defaultChecked={rootProps?.defaultChecked}
        multiple={rootProps?.multiple}
        name={rootProps?.name}
        value={rootProps?.value}
        onChange={rootProps?.onChange}
        required={rootProps?.required}
        readOnly={rootProps?.readOnly}
      />
      <CheckMark theme={theme}>
        <svg focusable='false' aria-hidden='true' viewBox='0 0 24 24'>
          <path fill='currentColor' />
        </svg>
      </CheckMark>
      {children}
    </CheckBox>
  )
}

const Check = Object.assign(CheckComponent, {
  Box: CheckBox,
  Root: CheckRoot,
  Mark: CheckMark,
})

export default Check
