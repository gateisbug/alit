import React from 'react';
import { CommonProps } from '../common';
import { TextareaTheme } from './preamble';
import { TextareaBox, TextareaRoot } from './styled';
import { useTextareaAutoResize } from './hooks';

export interface TextareaProps
  extends Pick<
      React.DetailedHTMLProps<
        React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
      >,
      | 'autoFocus'
      | 'defaultValue'
      | 'disabled'
      | 'onChange'
      | 'placeholder'
      | 'readOnly'
      | 'required'
      | 'value'
      | 'rows'
    >,
    CommonProps {
  maxHeight?: number;
  autoResize?: boolean;
  theme?: TextareaTheme;
}

const Textarea = React.forwardRef(function Textarea(
  props: TextareaProps,
  forwardRef?: React.ForwardedRef<HTMLTextAreaElement>,
) {
  const {
    className,
    rows = 1,
    onChange,
    theme,
    autoResize = true,
    maxHeight,
    ...other
  } = props;
  const internalRef = React.useRef<HTMLTextAreaElement>(null);

  React.useImperativeHandle(forwardRef, () => internalRef.current!);

  const { resizeInChange } = useTextareaAutoResize(
    internalRef,
    autoResize,
    maxHeight,
    onChange,
  );

  return (
    <TextareaBox theme={theme}>
      <TextareaRoot
        className={className}
        rows={rows}
        theme={theme}
        ref={internalRef}
        onChange={resizeInChange}
        {...other}
      />
    </TextareaBox>
  );
});

interface TextareaComponent
  extends React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      TextareaProps & React.RefAttributes<HTMLTextAreaElement>
    >
  > {
  Box: typeof TextareaBox;
  Root: typeof TextareaRoot;
}

const MemoizedTextarea = React.memo(Textarea) as TextareaComponent;
MemoizedTextarea.Box = TextareaBox;
MemoizedTextarea.Root = TextareaRoot;

export default MemoizedTextarea;
