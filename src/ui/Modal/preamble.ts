import { prefix } from '@ui/utils'
import { useCallback, useRef } from 'react'

import type { MouseEvent } from 'react'

export interface ModalTheme {
  surface?: string
  backdrop?: string
  shadow?: string
}

export const THEME: ModalTheme = {
  backdrop: 'var(--backdrop, #0000007F)',
}

export interface ModalProps {
  open: boolean
  onClickAway?: () => void
  theme?: ModalTheme
  children?: NodeType
}

export const cx = prefix('Modal')

export const useModal = ({ onClickAway }: ModalProps) => {
  const backdropRef = useRef<HTMLDivElement>(null)

  const modelOnClickAway = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === backdropRef.current && onClickAway !== undefined) {
        onClickAway()
      }
    },
    [onClickAway],
  )

  return {
    backdropRef,
    onClickAway: modelOnClickAway,
  }
}
