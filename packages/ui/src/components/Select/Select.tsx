import React from 'react';
import { CommonProps } from '../common';
import { SelectItemType, SelectTheme } from './preamble';
import {
  SelectBox,
  SelectContoller,
  SelectField,
  SelectForm,
  SelectItem,
  SelectPlaceholder,
} from './styled';
import { useClickAway, useSelectValue } from './hooks';

export interface SelectProps extends CommonProps {
  // open?: boolean;
  items?: SelectItemType[];
  multiple?: boolean;
  top?: string;
  placeholder?: string;
  theme?: SelectTheme;
  onChange?: (value: string) => void;
  defaultValue?: string;
}

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  function Select(props, forwardRef) {
    const {
      // open,
      items,
      multiple,
      placeholder,
      theme,
      top,
      children,
      className,
      onChange,
      defaultValue,
      ...others
    } = props;

    const [open, setOpen] = React.useState<boolean>(false);
    const onFieldClick = React.useCallback(() => {
      setOpen(!open);
    }, [open]);

    const formRef = useClickAway(forwardRef, setOpen);
    const { inputValue, onClickItem } = useSelectValue(
      defaultValue ?? '',
      multiple ?? false,
      setOpen,
      onChange,
    );

    return (
      <SelectForm ref={formRef} className={className} {...others}>
        <SelectField theme={theme} onClick={onFieldClick}>
          {inputValue.length > 0 ? (
            children
          ) : (
            <SelectPlaceholder theme={theme}>
              {placeholder ?? 'Please select value.'}
            </SelectPlaceholder>
          )}
          <SelectContoller readOnly value={inputValue} />
        </SelectField>
        <SelectBox theme={theme} $top={top} $open={open}>
          {items?.map((v, i) => (
            <SelectItem
              key={`${v.value}_${i}`}
              onClick={() => {
                onClickItem(v);
              }}
            >
              {v.label ?? v.value}
            </SelectItem>
          ))}
        </SelectBox>
      </SelectForm>
    );
  },
);

interface SelectComponent
  extends React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      SelectProps & React.RefAttributes<HTMLDivElement>
    >
  > {
  Form: typeof SelectForm;
  Field: typeof SelectField;
  Placeholder: typeof SelectPlaceholder;
  Contoller: typeof SelectContoller;
  Box: typeof SelectBox;
  Item: typeof SelectItem;
}

const MemoizedSelect = React.memo(Select) as SelectComponent;
MemoizedSelect.Form = SelectForm;
MemoizedSelect.Field = SelectField;
MemoizedSelect.Placeholder = SelectPlaceholder;
MemoizedSelect.Box = SelectBox;
MemoizedSelect.Item = SelectItem;

export default MemoizedSelect;
