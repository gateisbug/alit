'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'

import { CircularProgress } from '@ui'
import { selectItemStore } from '@util/item/itemStore'
import useInfiniteScroll from '@util/item/useInfiniteScroll'

const ItemTable = dynamic(() => import('@app/item/table/table'))
const ItemModal = dynamic(() => import('@app/item/modal/modal'))

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data],
  )

  return (
    <>
      <ItemTable
        items={items}
        rowClickHandler={(item: ItemInterface) => {
          setSelectItem(item)
        }}
      />

      {data.length >= visibleCount && (
        <div className='loader' ref={items.length >= 10 ? loader : undefined}>
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
