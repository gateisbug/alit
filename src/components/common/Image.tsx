import { useEffect, useRef, useState } from 'react'
// import styled from 'styled-components'

// const Root = styled.img`
//   width: 100%; /* 이미지가 컨테이너의 전체 너비를 차지하도록 설정 */
//   height: auto; /* 이미지 비율을 유지 */
//   display: block; /* 이미지를 블록 요소로 만듬 (새 줄에서 시작) */
//   margin: 0 auto; /* 이미지를 가운데 정렬 */
// `

interface ImageProps {
  src: string
  alt: string
  width: number
  height: number
  placeholder?: string
  priority?: boolean
}

function Image(props: ImageProps) {
  const { src, alt, height, width, placeholder, priority = false } = props

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

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    // eslint-disable-next-line consistent-return
    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [placeholder, src])

  return (
    <img
      ref={imgRef}
      src={link}
      loading={!priority ? 'lazy' : 'eager'}
      onError={(e) => {
        ;(e.target as HTMLImageElement).src = 'assets/noImage.svg'
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
