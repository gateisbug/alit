import { prefix } from '@ui/utils'
import { useCallback, useRef } from 'react'

import type { ChangeEvent } from 'react'

export interface TextareaTheme {
  primary?: string
  border?: PreferScheme
  invalid?: PreferScheme
  placeholder?: string
  disabled?: PreferScheme
}

export const THEME: TextareaTheme = {
  primary: 'var(--primary, #ffb74d)',
  placeholder: 'var(--placeholder, #6B7A90)',
  border: {
    light: 'var(--border, #0000003A)',
    dark: 'var(--border, #ffffff3a)',
  },
  invalid: {
    light: 'var(--invalid, #d32f2f)',
    dark: 'var(--invalid, #f44336)',
  },
  disabled: {
    light: 'var(--disabled, #00000042)',
    dark: 'var(--disabled, #FFFFFF4C)',
  },
}

export interface TextareaProps {
  autoFocus?: boolean
  autoResize?: boolean
  defaultValue?: string | number | readonly string[]
  disabled?: boolean
  maxHeight?: number
  onChange?: (e: ChangeEvent) => void
  placeholder?: string
  readOnly?: boolean
  required?: boolean
  value?: string | number | readonly string[]
  rows?: number
  theme?: TextareaTheme
}

export const px = prefix('textarea')

export const DEFAULT_PROPS = {
  rows: 1,
  autoResize: true,
}

export const useTextarea = ({
  autoResize,
  maxHeight,
  onChange,
}: TextareaProps) => {
  const internalRef = useRef<HTMLTextAreaElement>(null)

  const resizeInChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const textarea = internalRef.current
      if (autoResize && textarea) {
        textarea.style.height = 'auto'
        const newHeight = maxHeight
          ? Math.min(textarea.scrollHeight, maxHeight)
          : textarea.scrollHeight
        textarea.style.height = `${newHeight}px`

        if (maxHeight === undefined) textarea.style.overflowY = 'hidden'
        else {
          textarea.style.overflowY =
            e.target.value.length > 0 && textarea.scrollHeight > maxHeight
              ? 'auto'
              : 'hidden'
        }
      }

      if (onChange) {
        onChange(e)
      }
    },
    [autoResize, maxHeight, onChange],
  )

  return {
    internalRef,
    resizeInChange,
  }
}
