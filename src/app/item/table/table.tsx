'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

import { COLUMNS } from '@app/item/table/columns'
import { Box, Cell, Container, Row } from '@components/item'
import { CircularProgress } from '@ui'
import useInfiniteScroll from '@util/useInfiniteScroll'

const ItemModal = dynamic(() => import('@app/item/modal/modal'))

interface Props {
  data: ItemInterface[]
}

const LOADER = 10

export default function ItemTable({ data }: Props) {
  const [items, setItems] = useState<ItemInterface[]>([])
  const [visibleCount, setVisibleCount] = useState(LOADER)
  const [selectItem, setSelectItem] = useState<ItemInterface | undefined>()

  const loadMoreItems = () => {
    setVisibleCount((prev) => prev + LOADER)
  }
  const loader = useInfiniteScroll(loadMoreItems)

  useEffect(() => {
    setItems(data.slice(0, visibleCount))
  }, [visibleCount, data])

  const rowClickHandler = (item: ItemInterface) => {
    setSelectItem(item)
  }

  const clickAwayModal = () => {
    setSelectItem(undefined)
  }

  useEffect(
    () => () => {
      setItems([])
      setSelectItem(undefined)
      setVisibleCount(LOADER)
    },
    [data],
  )

  return (
    <>
      <Container>
        <Box className='table-header'>
          <Row>
            {COLUMNS.map((v) => (
              <Cell
                key={v.value}
                data-type='th'
                data-key={v.value}
                className='fzp fwb fcs'
              >
                {v.label}
              </Cell>
            ))}
          </Row>
        </Box>

        <Box className='table-body'>
          {items.map((item) => (
            <Row
              key={`${item.name}_${item.index}`}
              data-type='row'
              onClick={() => {
                rowClickHandler(item)
              }}
            >
              {COLUMNS.map((v) => (
                <Cell
                  key={`${v.label}_${item.index}_${v.value}`}
                  data-type='td'
                  data-key={v.value}
                  className='fzp fwr fc'
                >
                  {v.render ? v.render(item) : item[v.value]}
                </Cell>
              ))}
            </Row>
          ))}
        </Box>
      </Container>

      {data.length >= visibleCount && (
        <div className='loader' ref={items.length >= 10 ? loader : undefined}>
          <CircularProgress />
        </div>
      )}

      <ItemModal item={selectItem} clickAway={clickAwayModal} />
    </>
  )
}
