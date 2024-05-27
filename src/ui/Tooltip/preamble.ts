'use client'

import { useLayoutEffect, useRef, useState } from 'react'

import { prefix } from '@ui/utils'

export interface TooltipTheme {
  surface?: string
  color?: string
  zIndex?: number
}

export const THEME: TooltipTheme = {
  surface: 'var(--tooltip-surface, #616161EA)',
}

export interface TooltipProps {
  // show?: boolean
  children?: NodeType
  title?: NodeType
  theme?: TooltipTheme
}

export const px = prefix('tooltip')

export const useTooltip = () => {
  const containerRef = useRef<HTMLSpanElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useLayoutEffect(() => {
    if (!show || !containerRef?.current || !boxRef?.current) return
    const {
      top,
      left,
      height,
      width: w,
    } = containerRef.current.getBoundingClientRect()
    const { width } = boxRef.current.getBoundingClientRect()

    const translateX = left - width / 2 + w / 2
    const translateY = top + height + window.scrollY

    boxRef.current.setAttribute(
      'style',
      `transform: translate(${translateX}px, ${translateY}px)`,
    )
  }, [show])

  return {
    containerRef,
    boxRef,
    show,
    setShow,
  }
}
