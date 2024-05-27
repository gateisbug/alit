'use client'

import styled, { css } from 'styled-components'

import {
  px,
  THEME,
  SelectProps,
  SelectBoxTransientProps,
  useSelect,
  useClickAway,
  SelectFieldTransientProps,
} from './preamble'

const SelectForm = styled.div.attrs({
  className: px('form'),
})`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
`

const SelectField = styled.div.attrs({
  className: px('field'),
})<SelectFieldTransientProps>`
  padding: 0.75rem 1rem; // 12px 16px
  border-radius: 0.25rem; // 4px
  border: 0.0625rem solid transparent; // 1px

  ${({ $minWidth }) => {
    if (typeof $minWidth === 'number') {
      return css`
        min-width: ${$minWidth}px;
      `
    }
    if (typeof $minWidth === 'string' && $minWidth.length > 0) {
      return css`
        min-width: ${$minWidth};
      `
    }

    return undefined
  }}

  & {
    @media (prefers-color-scheme: light) {
      background-color: ${({ theme }) => theme.surface.light};
      border-color: ${({ theme }) => theme.border.light};
    }
    @media (prefers-color-scheme: dark) {
      background-color: ${({ theme }) => theme.surface.dark};
      border-color: ${({ theme }) => theme.border.dark};
    }
  }
`
SelectField.defaultProps = {
  theme: THEME,
}

const SelectPlaceholder = styled.span.attrs({
  className: px('placeholder'),
})`
  color: ${({ theme }) => theme.placeholder};
`
SelectPlaceholder.defaultProps = {
  theme: THEME,
}

const SelectContoller = styled.input`
  display: none;
`

const SelectBox = styled.ul.attrs({
  className: px('Box'),
})<SelectBoxTransientProps>`
  position: absolute;
  top: ${({ $top }) => $top ?? 'calc(100% + 0.5rem)'}; // 8px
  left: 0;
  right: 0;
  z-index: 1;
  display: ${({ $open }) => (!$open ? 'none' : 'flex')};
  flex-flow: column nowrap;
  border-radius: 0.25rem; // 4px
  border: 0.0625rem solid transparent; // 1px
  padding: 0;
  margin: 0;

  & {
    @media (prefers-color-scheme: light) {
      background-color: ${({ theme }) => theme.surface.light};
      border-color: ${({ theme }) => theme.border.light};
    }
    @media (prefers-color-scheme: dark) {
      background-color: ${({ theme }) => theme.surface.dark};
      border-color: ${({ theme }) => theme.border.dark};
    }
  }
`
SelectBox.defaultProps = {
  theme: THEME,
}

const SelectItem = styled.li.attrs({
  className: px('Item'),
})`
  list-style: none;
`

function SelectComponent({
  // open,
  items,
  multiple,
  placeholder,
  theme,
  top,
  children,
  onChange,
  defaultValue,
  minWidth,
}: SelectProps) {
  const { formRef, open, inputValue, onClickItem, onFieldClick } = useSelect({
    // open,
    items,
    multiple,
    placeholder,
    theme,
    top,
    children,
    onChange,
    defaultValue,
  })

  return (
    <SelectForm ref={formRef}>
      <SelectField theme={theme} onClick={onFieldClick} $minWidth={minWidth}>
        {inputValue.length > 0 ? (
          children ?? inputValue.split(',,').join(', ')
        ) : (
          <SelectPlaceholder theme={theme}>
            {placeholder ?? 'Please select value.'}
          </SelectPlaceholder>
        )}
        <SelectContoller readOnly value={inputValue} />
      </SelectField>
      <SelectBox theme={theme} $top={top} $open={open}>
        {items?.map((v) => (
          <SelectItem
            key={`select-item-${v.value}`}
            onClick={() => {
              onClickItem(v)
            }}
          >
            {v.label ?? v.value}
          </SelectItem>
        ))}
      </SelectBox>
    </SelectForm>
  )
}

const Select = Object.assign(SelectComponent, {
  Form: SelectForm,
  Field: SelectField,
  Placeholder: SelectPlaceholder,
  Box: SelectBox,
  Item: SelectItem,
  clickAway: useClickAway,
  hook: useSelect,
})

export default Select
