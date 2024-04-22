import React from 'react';

import { CommonProps } from '../common';

import { InputTheme, InputTypes } from './preamble';
import { InputBox, InputRoot } from './styled';

export interface InputProps
  extends Pick<
      React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
      | 'autoFocus'
      | 'defaultValue'
      | 'disabled'
      | 'onChange'
      | 'pattern'
      | 'placeholder'
      | 'readOnly'
      | 'required'
      | 'value'
    >,
    CommonProps {
  type?: InputTypes;
  theme?: InputTheme;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(props, forwardRef) {
    const { className, type = 'text', theme, ...others } = props;

    return (
      <InputBox theme={theme}>
        <InputRoot
          className={className}
          type={type}
          theme={theme}
          ref={forwardRef}
          {...others}
        />
      </InputBox>
    );
  },
);

interface InputComponent
  extends React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      InputProps & React.RefAttributes<HTMLInputElement>
    >
  > {
  Box: typeof InputBox;
  Root: typeof InputRoot;
}

const MemoizedInput = React.memo(Input) as InputComponent;
MemoizedInput.Box = InputBox;
MemoizedInput.Root = InputRoot;

export default MemoizedInput;
