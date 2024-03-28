import React from 'react';
import { CommonProps } from '../common';
import { ButtonTheme, VariantType } from './preamble';
import { ButtonRoot } from './styled';

export interface ButtonProps
  extends Pick<
      React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >,
      'disabled' | 'onClick'
    >,
    CommonProps {
  fullWidth?: boolean;
  theme?: ButtonTheme;
  variant?: VariantType;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, forwardRef) {
    const {
      children,
      className,
      disabled = false,
      fullWidth = false,
      variant = 'fill',
      ...others
    } = props;

    return (
      <ButtonRoot
        $variant={variant}
        $fullWidth={fullWidth}
        disabled={disabled}
        className={className}
        ref={forwardRef}
        {...others}
      >
        {children}
      </ButtonRoot>
    );
  },
);

interface ButtonComponent
  extends React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      ButtonProps & React.RefAttributes<HTMLSpanElement>
    >
  > {
  Root: typeof ButtonRoot;
}

const MemoizedButton = React.memo(Button) as ButtonComponent;
MemoizedButton.Root = ButtonRoot;

export default MemoizedButton;
