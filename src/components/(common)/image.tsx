import { useEffect, useRef, useState } from 'react'

interface ImageProps {
  src: string
  alt: string
  width: number
  height: number
  placeholder?: string
  priority?: boolean
  defaultImage?: string
}

function Image(props: ImageProps) {
  const {
    src,
    alt,
    height,
    width,
    placeholder,
    priority = false,
    defaultImage = 'assets/noImage.svg',
  } = props

  const [link, setLink] = useState(placeholder ?? src)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!placeholder) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLink(src)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )

    if (imgRef.current) observer.observe(imgRef.current)

    // eslint-disable-next-line consistent-return
    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current)
    }
  }, [placeholder, src])

  return (
    <img
      ref={imgRef}
      src={link}
      loading={!priority ? 'lazy' : 'eager'}
      onError={(e) => {
        ;(e.target as HTMLImageElement).src = defaultImage
        ;(e.target as HTMLImageElement).width = 32
        ;(e.target as HTMLImageElement).height = 32
      }}
      alt={alt}
      width={width}
      height={height}
    />
  )
}

export default Image
