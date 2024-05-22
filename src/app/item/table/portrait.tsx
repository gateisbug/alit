'use client'

import Image from 'next/image'
import { CSSProperties } from 'react'

import { PortraitFrame } from '@components/item'

interface PortraitProps {
  src: string
  placeholder: string
  stroke?: 'default' | 'red' | 'yellow' | 'blue' | 'violet'
  tier?: TierType
  className?: string
  size?: number
  style?: CSSProperties
}

export default function Portrait({
  placeholder,
  src,
  tier = 'R',
  stroke = 'default',
  className,
  size = 48,
  style,
}: PortraitProps) {
  return (
    <PortraitFrame
      data-tier={tier}
      data-stroke={stroke}
      className={className}
      style={style}
    >
      <Image
        src={src}
        alt='images'
        width={`${size}`}
        height={`${size}`}
        sizes={`${size}px`}
        placeholder='blur'
        loading='lazy'
        blurDataURL={placeholder}
      />
    </PortraitFrame>
  )
}
