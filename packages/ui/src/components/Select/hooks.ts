import React from 'react';
import { SelectItemType } from './preamble';

export function useClickAway(
  forwardRef: React.ForwardedRef<HTMLDivElement>,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const formRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(forwardRef, () => formRef.current!);
  React.useEffect(() => {
    const clickAway = (event: MouseEvent) => {
      if (!formRef?.current?.contains(event.target as HTMLElement)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', clickAway);
    return () => {
      document.removeEventListener('click', clickAway);
    };
  }, []);

  return formRef;
}

// const formRef = React.useRef<HTMLDivElement>(null);
// React.useImperativeHandle(forwardRef, () => formRef.current!);
// React.useEffect(() => {
//   const clickAway = (event: MouseEvent) => {
//     if (!formRef?.current?.contains(event.target as HTMLElement)) {
//       setOpen(false);
//     }
//   };
//
//   document.addEventListener('click', clickAway);
//   return () => {
//     document.removeEventListener('click', clickAway);
//   };
// }, []);

export function useSelectValue(
  defaultValue: string,
  multiple: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  onChange?: (value: string) => void,
) {
  const [inputValue, setInputValue] = React.useState(defaultValue);
  const onClickItem = React.useCallback(
    (item: SelectItemType) => {
      if (!multiple) {
        setInputValue((item.value ?? '').toString());
        setOpen(false);
      } else {
        setInputValue((prev) => {
          const values = prev.length > 0 ? prev.split(',') : [];
          const inputs = (item.value ?? '').toString();

          const fIndex = values.findIndex((v) => v === inputs);
          if (fIndex > -1) {
            values.splice(fIndex, 1);
          } else {
            values.push((item.value ?? '').toString());
          }

          return values.join(',');
        });
      }
    },
    [inputValue],
  );

  React.useEffect(() => {
    onChange && onChange(inputValue);
  }, [inputValue]);

  return { inputValue, onClickItem };
}

// const [inputValue, setInputValue] = React.useState(defaultValue ?? '');
// const _onClickItem = React.useCallback(
//   (item: SelectItemType) => {
//     if (!multiple) {
//       setInputValue((item.value ?? '').toString());
//       setOpen(false);
//     } else {
//       setInputValue((prev) => {
//         const values = prev.length > 0 ? prev.split(',') : [];
//         const inputs = (item.value ?? '').toString();
//
//         const fIndex = values.findIndex((v) => v === inputs);
//         if (fIndex > -1) {
//           values.splice(fIndex, 1);
//         } else {
//           values.push((item.value ?? '').toString());
//         }
//
//         return values.join(',');
//       });
//     }
//   },
//   [inputValue],
// );
//
// React.useEffect(() => {
//   onChange && onChange(inputValue);
// }, [inputValue]);
