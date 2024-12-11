import useInfiniteScroll from '@parakeet/util/useInfiniteScroll.ts'
import { useEffect, useState } from 'react'

const LOADER = 10

export default function useInfiniteGrid(data: ItemInterface[]) {
  const [current, setCurrent] = useState<ItemInterface[]>([])
  const [visibleCount, setVisibleCount] = useState(LOADER)
  const loaderRef = useInfiniteScroll(() => {
    setVisibleCount((prev) => prev + LOADER)
  })

  useEffect(() => {
    setCurrent(data.slice(0, visibleCount))
  }, [visibleCount, data])

  useEffect(
    () => () => {
      setCurrent([])
      setVisibleCount(LOADER)
    },
    [data],
  )

  return {
    current,
    visibleCount,
    loaderRef,
    LOADER,
  }
}
