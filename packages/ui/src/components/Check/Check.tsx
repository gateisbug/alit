// noinspection CssUnknownProperty

import React from 'react';
import { CheckboxTheme } from './preamble';
import { CheckBox, CheckMark, CheckRoot } from './styled';
import { CommonProps } from '../common';

export interface CheckProps
  extends Pick<
      React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
      | 'checked'
      | 'disabled'
      | 'defaultChecked'
      | 'multiple'
      | 'name'
      | 'onChange'
      | 'required'
      | 'readOnly'
      | 'value'
    >,
    CommonProps {
  theme?: CheckboxTheme;
}

const Check = React.forwardRef<HTMLLabelElement, CheckProps>(
  function Checkbox(props, forwardRef) {
    const { children, className, theme, style, ...others } = props;

    return (
      <CheckBox className={className} style={style} ref={forwardRef}>
        <CheckRoot type='checkbox' {...others} />
        <CheckMark theme={theme}>
          <svg focusable='false' aria-hidden='true' viewBox='0 0 24 24'>
            <path fill='currentColor' />
          </svg>
        </CheckMark>
        {children}
      </CheckBox>
    );
  },
);

interface CheckComponent
  extends React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      CheckProps & React.RefAttributes<HTMLLabelElement>
    >
  > {
  Box: typeof CheckBox;
  Root: typeof CheckRoot;
  Mark: typeof CheckMark;
}

const MemoizedCheck = React.memo(Check) as CheckComponent;
MemoizedCheck.Box = CheckBox;
MemoizedCheck.Root = CheckRoot;
MemoizedCheck.Mark = CheckMark;

export default MemoizedCheck;
