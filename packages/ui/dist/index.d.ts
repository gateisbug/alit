import * as react from 'react';
import react__default, { ReactNode } from 'react';
import * as styled_components from 'styled-components';
import * as styled_components_dist_types from 'styled-components/dist/types';

type CommonProps<T = HTMLElement> = Pick<
  react__default.DetailedHTMLProps<react__default.HTMLAttributes<T>, T>,
  'id' | 'className' | 'children' | 'style'
>;

type PreferScheme = {
  light?: string;
  dark?: string;
};

interface BadgeTheme {
    primary?: string;
    onPrimary?: string;
}
type VariantType$2 = 'standard' | 'dot';
type VerticalType = 'top' | 'bottom';
type HorizontalType = 'right' | 'left';

interface BadgeRootTransientProps {
    $horizontal?: HorizontalType;
    $show?: boolean;
    $variant?: VariantType$2;
    $vertical?: VerticalType;
}
declare const BadgeBox: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
    ref?: ((instance: HTMLSpanElement | null) => void) | react.RefObject<HTMLSpanElement> | null | undefined;
}>, never>, never>>;
declare const BadgeRoot: styled_components.IStyledComponent<"web", styled_components_dist_types.Substitute<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
    ref?: ((instance: HTMLSpanElement | null) => void) | react.RefObject<HTMLSpanElement> | null | undefined;
}>, never>, BadgeRootTransientProps>>;

interface BadgeProps extends CommonProps {
    content?: number | string;
    horizontal?: HorizontalType;
    max?: number;
    show?: boolean;
    theme?: BadgeTheme;
    variant?: VariantType$2;
    vertical?: VerticalType;
}
interface BadgeComponent extends react__default.MemoExoticComponent<react__default.ForwardRefExoticComponent<BadgeProps & react__default.RefAttributes<HTMLSpanElement>>> {
    Box: typeof BadgeBox;
    Root: typeof BadgeRoot;
}
declare const MemoizedBadge: BadgeComponent;

interface ButtonTheme {
    primary?: string;
    onPrimary?: string;
    primaryHover?: string;
    disabled?: PreferScheme;
    onDisabled?: PreferScheme;
}
type VariantType$1 = 'fill' | 'line' | 'text';

interface ButtonRootTransientProps {
    $fullWidth?: boolean;
    $variant?: VariantType$1;
}
declare const ButtonRoot: styled_components.IStyledComponent<"web", styled_components_dist_types.Substitute<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | react.RefObject<HTMLButtonElement> | null | undefined;
}>, never>, ButtonRootTransientProps>>;

interface ButtonProps extends Pick<react__default.DetailedHTMLProps<react__default.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'disabled' | 'onClick'>, CommonProps {
    fullWidth?: boolean;
    theme?: ButtonTheme;
    variant?: VariantType$1;
}
interface ButtonComponent extends react__default.MemoExoticComponent<react__default.ForwardRefExoticComponent<ButtonProps & react__default.RefAttributes<HTMLSpanElement>>> {
    Root: typeof ButtonRoot;
}
declare const MemoizedButton: ButtonComponent;

interface CheckboxTheme {
    primary?: string;
    default?: PreferScheme;
    disabled?: PreferScheme;
}

declare const CheckBox: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, Omit<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> & {
    ref?: ((instance: HTMLLabelElement | null) => void) | react.RefObject<HTMLLabelElement> | null | undefined;
}>, never>, never>>;
declare const CheckRoot: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, Omit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & {
    ref?: ((instance: HTMLInputElement | null) => void) | react.RefObject<HTMLInputElement> | null | undefined;
}>, never>, never>>;
declare const CheckMark: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | react.RefObject<HTMLDivElement> | null | undefined;
}>, never>, never>>;

interface CheckProps extends Pick<react__default.DetailedHTMLProps<react__default.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'checked' | 'disabled' | 'defaultChecked' | 'multiple' | 'name' | 'onChange' | 'required' | 'readOnly' | 'value'>, CommonProps {
    theme?: CheckboxTheme;
}
interface CheckComponent extends react__default.MemoExoticComponent<react__default.ForwardRefExoticComponent<CheckProps & react__default.RefAttributes<HTMLLabelElement>>> {
    Box: typeof CheckBox;
    Root: typeof CheckRoot;
    Mark: typeof CheckMark;
}
declare const MemoizedCheck: CheckComponent;

interface ChipTheme {
    primary?: string;
    onPrimary?: string;
}
type VariantType = 'fill' | 'line' | 'text';

interface ChipRootTransientProps {
    $variant?: VariantType;
}
declare const ChipRoot: styled_components.IStyledComponent<"web", styled_components_dist_types.Substitute<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
    ref?: ((instance: HTMLSpanElement | null) => void) | react.RefObject<HTMLSpanElement> | null | undefined;
}>, never>, ChipRootTransientProps>>;

interface ChipProps extends CommonProps {
    variant?: VariantType;
    theme?: ChipTheme;
}
interface ChipComponent extends react__default.MemoExoticComponent<react__default.ForwardRefExoticComponent<ChipProps & react__default.RefAttributes<HTMLSpanElement>>> {
    Root: typeof ChipRoot;
}
declare const MemoizedChip: ChipComponent;

interface InputTheme {
    primary?: string;
    border?: PreferScheme;
    invalid?: PreferScheme;
    placeholder?: string;
    disabled?: PreferScheme;
}
type InputTypes = 'text' | 'password' | 'url' | 'email' | 'date' | 'number';

declare const InputBox: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, Omit<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> & {
    ref?: ((instance: HTMLLabelElement | null) => void) | react.RefObject<HTMLLabelElement> | null | undefined;
}>, never>, never>>;
declare const InputRoot: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, Omit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & {
    ref?: ((instance: HTMLInputElement | null) => void) | react.RefObject<HTMLInputElement> | null | undefined;
}>, never>, never>>;

interface InputProps extends Pick<react__default.DetailedHTMLProps<react__default.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'autoFocus' | 'defaultValue' | 'disabled' | 'onChange' | 'pattern' | 'placeholder' | 'readOnly' | 'required' | 'value'>, CommonProps {
    type?: InputTypes;
    theme?: InputTheme;
}
interface InputComponent extends react__default.MemoExoticComponent<react__default.ForwardRefExoticComponent<InputProps & react__default.RefAttributes<HTMLInputElement>>> {
    Box: typeof InputBox;
    Root: typeof InputRoot;
}
declare const MemoizedInput: InputComponent;

interface ModalTheme {
    surface?: string;
    backdrop?: string;
    shadow?: string;
}

declare const ModalBackdrop: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | react.RefObject<HTMLDivElement> | null | undefined;
}>, never>, never>>;
declare const ModalRoot: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | react.RefObject<HTMLDivElement> | null | undefined;
}>, never>, never>>;

declare function useScrollBlock(trigger: boolean, style?: string): void;

interface ModalProps extends CommonProps {
    open: boolean;
    onClickAway?: () => void;
    theme?: ModalTheme;
}
interface ModalComponent extends react__default.MemoExoticComponent<react__default.ForwardRefExoticComponent<ModalProps & react__default.RefAttributes<HTMLDivElement>>> {
    Backdrop: typeof ModalBackdrop;
    Root: typeof ModalRoot;
    Hook: typeof useScrollBlock;
}
declare const MemoizedModal: ModalComponent;

declare const RadioBox: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, Omit<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> & {
    ref?: ((instance: HTMLLabelElement | null) => void) | react.RefObject<HTMLLabelElement> | null | undefined;
}>, never>, never>>;
declare const RadioRoot: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, Omit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & {
    ref?: ((instance: HTMLInputElement | null) => void) | react.RefObject<HTMLInputElement> | null | undefined;
}>, never>, never>>;
declare const RadioMark: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | react.RefObject<HTMLDivElement> | null | undefined;
}>, never>, never>>;

interface RadioTheme {
    primary?: string;
    default?: PreferScheme;
    disabled?: PreferScheme;
}

interface RadioProps extends Pick<react__default.DetailedHTMLProps<react__default.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'checked' | 'disabled' | 'defaultChecked' | 'name' | 'onChange' | 'required' | 'readOnly' | 'value'>, CommonProps {
    theme?: RadioTheme;
}
interface RadioComponent extends react__default.MemoExoticComponent<react__default.ForwardRefExoticComponent<RadioProps & react__default.RefAttributes<HTMLInputElement>>> {
    Box: typeof RadioBox;
    Root: typeof RadioRoot;
    Mark: typeof RadioMark;
}
declare const MemoizedRadio: RadioComponent;

declare const ScrollviewRoot: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | react.RefObject<HTMLDivElement> | null | undefined;
}>, never>, never>>;

interface ScrollViewComponent extends react__default.MemoExoticComponent<react__default.ForwardRefExoticComponent<CommonProps & react__default.RefAttributes<HTMLDivElement>>> {
    Root: typeof ScrollviewRoot;
}
declare const MemoizedScrollView: ScrollViewComponent;

interface SelectTheme {
    placeholder?: string;
    surface?: PreferScheme;
    border?: PreferScheme;
}
type SelectItemType = {
    label?: react__default.ReactNode;
    value: string | number | boolean | null;
};

declare const SelectForm: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | react.RefObject<HTMLDivElement> | null | undefined;
}>, never>, never>>;
declare const SelectField: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | react.RefObject<HTMLDivElement> | null | undefined;
}>, never>, never>>;
declare const SelectPlaceholder: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
    ref?: ((instance: HTMLSpanElement | null) => void) | react.RefObject<HTMLSpanElement> | null | undefined;
}>, never>, never>>;
declare const SelectContoller: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, never>>;
interface SelectBoxTransientProps {
    $open?: boolean;
    $top?: string;
}
declare const SelectBox: styled_components.IStyledComponent<"web", styled_components_dist_types.Substitute<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & {
    ref?: ((instance: HTMLUListElement | null) => void) | react.RefObject<HTMLUListElement> | null | undefined;
}>, never>, SelectBoxTransientProps>>;
declare const SelectItem: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, Omit<react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & {
    ref?: ((instance: HTMLLIElement | null) => void) | react.RefObject<HTMLLIElement> | null | undefined;
}>, never>, never>>;

interface SelectProps extends CommonProps {
    items?: SelectItemType[];
    multiple?: boolean;
    top?: string;
    placeholder?: string;
    theme?: SelectTheme;
    onChange?: (value: string) => void;
    defaultValue?: string;
}
interface SelectComponent extends react__default.MemoExoticComponent<react__default.ForwardRefExoticComponent<SelectProps & react__default.RefAttributes<HTMLDivElement>>> {
    Form: typeof SelectForm;
    Field: typeof SelectField;
    Placeholder: typeof SelectPlaceholder;
    Contoller: typeof SelectContoller;
    Box: typeof SelectBox;
    Item: typeof SelectItem;
}
declare const MemoizedSelect: SelectComponent;

declare function useClickAway(setOpen: react__default.Dispatch<react__default.SetStateAction<boolean>>, forwardRef?: react__default.ForwardedRef<HTMLDivElement>): react__default.RefObject<HTMLDivElement>;
declare function useSelectValue(defaultValue: string, multiple: boolean, setOpen: react__default.Dispatch<react__default.SetStateAction<boolean>>, onChange?: (value: string) => void): {
    inputValue: string;
    onClickItem: (item: SelectItemType) => void;
};

type SkeletonVarientType = 'text' | 'circle' | 'paragraph';
interface SkeletonTheme {
    surface?: PreferScheme;
}

interface SkeletonRootTransientProps {
    $varient?: SkeletonVarientType;
}
declare const SkeletonRoot: styled_components.IStyledComponent<"web", styled_components_dist_types.Substitute<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
    ref?: ((instance: HTMLSpanElement | null) => void) | react.RefObject<HTMLSpanElement> | null | undefined;
}>, never>, SkeletonRootTransientProps>>;

interface SkeletonProps extends Omit<CommonProps, 'children'> {
    varient?: SkeletonVarientType;
    theme?: SkeletonTheme;
}
interface SkeletonComponent extends react__default.MemoExoticComponent<react__default.ForwardRefExoticComponent<SkeletonProps & react__default.RefAttributes<HTMLSpanElement>>> {
    Root: typeof SkeletonRoot;
}
declare const MemoizedSkeleton: SkeletonComponent;

type RowType = Record<string, string | number | null>;
type ColumnsType = {
    field: string;
    headerName: string;
    width?: string | number;
    type?: 'string' | 'number';
    valueGetter?: (params: RowType) => ReactNode;
};
interface TableTheme {
    border?: string;
}

declare const TableContainer: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | react.RefObject<HTMLDivElement> | null | undefined;
}>, never>, never>>;
declare const TableRow: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | react.RefObject<HTMLDivElement> | null | undefined;
}>, never>, never>>;
declare const TableCell: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | react.RefObject<HTMLDivElement> | null | undefined;
}>, never>, never>>;

interface TableProps extends Omit<CommonProps, 'children'> {
    columns: ColumnsType[];
    rows: RowType[];
    theme?: TableTheme;
}
interface TableComponent extends react__default.MemoExoticComponent<react__default.ForwardRefExoticComponent<TableProps & react__default.RefAttributes<HTMLDivElement>>> {
    Container: typeof TableContainer;
    Row: typeof TableRow;
    Cell: typeof TableCell;
}
declare const MemoizedTable: TableComponent;

interface TextareaTheme {
    primary?: string;
    border?: PreferScheme;
    invalid?: PreferScheme;
    placeholder?: string;
    disabled?: PreferScheme;
}

declare const TextareaBox: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, Omit<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> & {
    ref?: ((instance: HTMLLabelElement | null) => void) | react.RefObject<HTMLLabelElement> | null | undefined;
}>, never>, never>>;
declare const TextareaRoot: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<styled_components_dist_types.FastOmit<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, Omit<react.DetailedHTMLProps<react.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> & {
    ref?: ((instance: HTMLTextAreaElement | null) => void) | react.RefObject<HTMLTextAreaElement> | null | undefined;
}>, never>, never>>;

interface TextareaProps extends Pick<react__default.DetailedHTMLProps<react__default.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, 'autoFocus' | 'defaultValue' | 'disabled' | 'onChange' | 'placeholder' | 'readOnly' | 'required' | 'value' | 'rows'>, CommonProps {
    maxHeight?: number;
    autoResize?: boolean;
    theme?: TextareaTheme;
}
interface TextareaComponent extends react__default.MemoExoticComponent<react__default.ForwardRefExoticComponent<TextareaProps & react__default.RefAttributes<HTMLTextAreaElement>>> {
    Box: typeof TextareaBox;
    Root: typeof TextareaRoot;
}
declare const MemoizedTextarea: TextareaComponent;

declare function useTextareaAutoResize(internalRef: react__default.RefObject<HTMLTextAreaElement>, autoResize?: boolean, maxHeight?: number, onChange?: react__default.ChangeEventHandler<HTMLTextAreaElement>): {
    resizeInChange: (e: react__default.ChangeEvent<HTMLTextAreaElement>) => void;
};

export { MemoizedBadge as Badge, type BadgeProps, MemoizedButton as Button, type ButtonProps, MemoizedCheck as Check, type CheckProps, MemoizedChip as Chip, type ChipProps, MemoizedInput as Input, type InputProps, MemoizedModal as Modal, type ModalProps, MemoizedRadio as Radio, type RadioProps, MemoizedScrollView as ScrollView, MemoizedSelect as Select, type SelectProps, MemoizedSkeleton as Skeleton, type SkeletonProps, MemoizedTable as Table, type TableProps, MemoizedTextarea as Textarea, type TextareaProps, useClickAway, useScrollBlock, useSelectValue, useTextareaAutoResize };
