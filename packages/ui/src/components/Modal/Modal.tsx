import React from 'react';
import { createPortal } from 'react-dom';

import { CommonProps } from '../common';

import { useScrollBlock } from './hooks';
import { ModalTheme } from './preamble';
import { ModalBackdrop, ModalRoot } from './styled';

export interface ModalProps extends CommonProps {
  open: boolean;
  onClickAway?: () => void;
  theme?: ModalTheme;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  function Modal(props, forwardRef) {
    const { open, onClickAway, className, children, theme, ...others } = props;
    useScrollBlock(open);

    const backdropRef = React.useRef<HTMLDivElement>(null);

    const _onClickAway = React.useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === backdropRef.current) {
          onClickAway && onClickAway();
        }
      },
      [onClickAway],
    );

    return open
      ? createPortal(
          <ModalBackdrop ref={backdropRef} onClick={_onClickAway} theme={theme}>
            <ModalRoot
              ref={forwardRef}
              className={className}
              theme={theme}
              {...others}
            >
              {children}
            </ModalRoot>
          </ModalBackdrop>,
          document.body,
        )
      : null;
  },
);

interface ModalComponent
  extends React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      ModalProps & React.RefAttributes<HTMLDivElement>
    >
  > {
  Backdrop: typeof ModalBackdrop;
  Root: typeof ModalRoot;
  Hook: typeof useScrollBlock;
}

const MemoizedModal = React.memo(Modal) as ModalComponent;
MemoizedModal.Backdrop = ModalBackdrop;
MemoizedModal.Root = ModalRoot;
MemoizedModal.Hook = useScrollBlock;

export default MemoizedModal;
