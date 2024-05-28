import { CircularProgress } from '@ui'
import { selectItemStore } from '@util/item/itemStore'
import useInfiniteScroll from '@util/item/useInfiniteScroll'
import { lazy, Suspense, useEffect, useState } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'

const ItemTable = lazy(() => import('@app/item/table/table'))
const ItemModal = lazy(() => import('@app/item/modal/modal'))

const LOADER = 10

export default function ItemController({ data }: { data: ItemInterface[] }) {
  const [items, setItems] = useState<ItemInterface[]>([])
  const [visibleCount, setVisibleCount] = useState(LOADER)
  const [selectItem, setSelectItem] = useRecoilState(selectItemStore)
  const resetSelectItem = useResetRecoilState(selectItemStore)

  const loader = useInfiniteScroll(() => {
    setVisibleCount((prev) => prev + LOADER)
  })

  useEffect(() => {
    setItems(data.slice(0, visibleCount))
  }, [visibleCount, data])

  useEffect(
    () => () => {
      setItems([])
      resetSelectItem()
      setVisibleCount(LOADER)
    },
    [data],
  )

  return (
    <>
      <Suspense>
        <ItemTable
          items={items}
          rowClickHandler={(item: ItemInterface) => {
            setSelectItem(item)
          }}
        />
      </Suspense>

      {data.length >= visibleCount && (
        <div
          className='loader'
          ref={items.length >= LOADER ? loader : undefined}
        >
          <CircularProgress />
        </div>
      )}

      <ItemModal
        item={selectItem}
        clickAway={() => {
          setSelectItem(undefined)
        }}
      />
    </>
  )
}
