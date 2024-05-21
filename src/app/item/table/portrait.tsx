'use client'

import Image from 'next/image'

import { PortraitFrame } from '@components/item'

interface PortraitProps {
  src: string
  placeholder: string
  stroke?: 'default' | 'red' | 'yellow' | 'blue' | 'violet'
  tier?: TierType
  className?: string
}

export default function Portrait({
  placeholder,
  src,
  tier = 'R',
  stroke = 'default',
  className,
}: PortraitProps) {
  return (
    <PortraitFrame data-tier={tier} data-stroke={stroke} className={className}>
      <Image
        src={src}
        alt='images'
        width='48'
        height='48'
        sizes='48px'
        placeholder='blur'
        loading='lazy'
        blurDataURL={placeholder}
      />
    </PortraitFrame>
  )
}
