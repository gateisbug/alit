'use client'

import {
  useRef,
  useImperativeHandle,
  useEffect,
  useState,
  useCallback,
} from 'react'

import { prefix } from '@ui/utils'

import type { Dispatch, SetStateAction, ForwardedRef } from 'react'

export interface SelectTheme {
  placeholder?: string
  surface?: PreferScheme
  border?: PreferScheme
}

export interface SelectBoxTransientProps {
  $open?: boolean
  $top?: string
}

export const THEME: SelectTheme = {
  placeholder: 'var(--placeholder, #6B7A90)',
  surface: {
    light: 'var(--surface, #f1f1f2)',
    dark: 'var(--surface, #242424)',
  },
  border: {
    light: 'var(--border, #0000003A)',
    dark: 'var(--border, #FFFFFF3A)',
  },
}

export interface SelectProps {
  // open?: boolean;
  items?: SelectItemType[]
  multiple?: boolean
  top?: string
  placeholder?: string
  theme?: SelectTheme
  onChange?: (value: string) => void
  defaultValue?: string
  children?: NodeType
  minWidth?: string | number
}

export interface SelectFieldTransientProps {
  $minWidth?: string | number
}

export type SelectItemType = {
  label?: NodeType
  value: string | number | boolean | null
}

export const px = prefix('select')

export const useClickAway = (
  setOpen: Dispatch<SetStateAction<boolean>>,
  forwardRef?: ForwardedRef<HTMLDivElement>,
) => {
  const formRef = useRef<HTMLDivElement>(null)
  useImperativeHandle(forwardRef, () => formRef.current!)
  useEffect(() => {
    const clickAway = (event: MouseEvent) => {
      if (!formRef?.current?.contains(event.target as HTMLElement)) {
        setOpen(false)
      }
    }

    document.addEventListener('click', clickAway)
    return () => {
      document.removeEventListener('click', clickAway)
    }
  }, [setOpen])

  return formRef
}

export const useSelect = ({
  defaultValue,
  multiple,
  onChange,
}: SelectProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const onFieldClick = useCallback(() => {
    setOpen(!open)
  }, [open])

  const formRef = useClickAway(setOpen)
  const [inputValue, setInputValue] = useState(defaultValue ?? '')
  const onClickItem = useCallback(
    (item: SelectItemType) => {
      if (!multiple) {
        setInputValue((item.value ?? '').toString())
        setOpen(false)
      } else {
        setInputValue((prev) => {
          const values = prev.length > 0 ? prev.split(',,') : []
          const inputs = (item.value ?? '').toString()

          const fIndex = values.findIndex((v) => v === inputs)
          if (fIndex > -1) {
            values.splice(fIndex, 1)
          } else {
            values.push((item.value ?? '').toString())
          }

          return values.join(',,')
        })
      }
    },
    [multiple],
  )

  useEffect(() => {
    if (onChange) {
      onChange(inputValue)
    }
  }, [inputValue, onChange])

  return {
    formRef,
    open,
    inputValue,
    onClickItem,
    onFieldClick,
  }
}
