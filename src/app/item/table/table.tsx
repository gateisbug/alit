'use client'

import { useEffect, useState } from 'react'

import { COLUMNS } from '@app/item/table/columns'
import { Box, Cell, Container, Row } from '@datum/item'
import { CircularProgress } from '@ui'
import useInfiniteScroll from '@util/useInfiniteScroll'

interface Props {
  data: ItemInterface[]
}

const LOADER = 10

export default function ItemTable({ data }: Props) {
  const [items, setItems] = useState<ItemInterface[]>([])
  const [visibleCount, setVisibleCount] = useState(LOADER)

  const loadMoreItems = () => {
    setVisibleCount((prev) => prev + LOADER)
  }
  const loader = useInfiniteScroll(loadMoreItems)

  useEffect(() => {
    setItems(data.slice(0, visibleCount))
  }, [visibleCount, data])

  return (
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
            // onClick={() => {
            //   console.log(item)
            // }}
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

        {data.length >= visibleCount && (
          <div
            style={{
              padding: '2rem',
              display: 'flex',
              justifyContent: 'center',
            }}
            ref={loader}
          >
            <CircularProgress />
          </div>
        )}
      </Box>
    </Container>
  )
}
