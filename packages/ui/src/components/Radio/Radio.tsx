import React from 'react';
import { CommonProps } from '../common';
import { RadioBox, RadioMark, RadioRoot } from './styled';
import { RadioTheme } from './preamble';

export interface RadioProps
  extends Pick<
      React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
      | 'checked'
      | 'disabled'
      | 'defaultChecked'
      | 'name'
      | 'onChange'
      | 'required'
      | 'readOnly'
      | 'value'
    >,
    CommonProps {
  theme?: RadioTheme;
}

const Radio = React.forwardRef<HTMLLabelElement, RadioProps>(
  function Radio(props, forwardRef) {
    const { children, className, theme, style, ...inputProps } = props;

    return (
      <RadioBox className={className} style={style} ref={forwardRef}>
        <RadioRoot type='radio' {...inputProps} />
        <RadioMark theme={theme}>
          <svg focusable='false' aria-hidden='true' viewBox='0 0 24 24'>
            <path
              d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
              fill='currentColor'
            />
          </svg>
          <svg focusable='false' aria-hidden='true' viewBox='0 0 24 24'>
            <path
              d='M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z'
              fill='currentColor'
            />
          </svg>
        </RadioMark>
        {children}
      </RadioBox>
    );
  },
);

interface RadioComponent
  extends React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      RadioProps & React.RefAttributes<HTMLInputElement>
    >
  > {
  Box: typeof RadioBox;
  Root: typeof RadioRoot;
  Mark: typeof RadioMark;
}

const MemoizedRadio = React.memo(Radio) as RadioComponent;
MemoizedRadio.Box = RadioBox;
MemoizedRadio.Root = RadioRoot;
MemoizedRadio.Mark = RadioMark;

export default MemoizedRadio;
