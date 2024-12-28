import { Fragment, lazy, type ReactNode, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

import Loader from '@components/(common)/loader.tsx'
import {
  GridRow,
  GridContainer,
  GridCell,
} from '@components/item/(data-grid).ts'
import useModalStore from '@util/store/modal.ts'
import useInfiniteGrid from '@util/useInfiniteGrid.ts'

import { headers, render } from './grid-render.tsx'
import useItemData from './useItemData.ts'

const ItemModal = lazy(() => import('@components/(modals)/item/page.tsx'))
const ITEMMODALKEY = 'item-modal'

function useDataGrid() {
  const { modalAdd } = useModalStore()

  const data = useItemData()
  const { current, visibleCount, loaderRef, LOADER } =
    useInfiniteGrid<ItemInterface>(data ?? [])

  const [searchParams, setSearchParams] = useSearchParams()
  const keyword = searchParams.get('keyword') ?? undefined

  const renderText = useCallback(
    (d: ItemInterface, h: keyof ItemInterface) => {
      let classname: string = ''
      let value: ReactNode

      switch (h) {
        case 'image':
          classname = 'jc-c'
          value = render.img(d)
          break
        case 'name':
          classname = 'jc-c ta-c word-break'
          value = render.name(d, keyword)
          break
        case 'nickname':
          classname = 'jc-c ta-c word-break'
          value = render.nickname(d, keyword)
          break
        case 'obtain':
          classname = 'column ai-fs jc-c'
          value = render.obtain(d)
          break
        case 'class':
          classname = 'jc-c'
          value = render.class(d)
          break
        case 'type':
          classname = 'jc-c'
          value = render.type(d)
          break
        case 'explain':
          value = render.explain(d, keyword)
          break
        default:
          classname = 'jc-c ta-c word-break'
          value = d[h]
          break
      }

      return <GridCell className={classname}>{value}</GridCell>
    },
    [keyword],
  )

  const gridRowClickHandler = (item: ItemInterface) => {
    modalAdd({
      id: ITEMMODALKEY,
      children: <ItemModal item={item} />,
    })

    searchParams.set('modal', ITEMMODALKEY)
    setSearchParams(searchParams)
  }

  return {
    current,
    renderText,
    data,
    visibleCount,
    LOADER,
    loaderRef,
    gridRowClickHandler,
  }
}

export default function ItemDataGrid() {
  const {
    current,
    renderText,
    data = [],
    visibleCount,
    LOADER,
    loaderRef,
    gridRowClickHandler,
  } = useDataGrid()

  return (
    <>
      <GridContainer className='b1'>
        <GridRow className='fwb fcs' data-type='head'>
          {headers.map((v) => (
            <GridCell key={`head_${v.value}`} className='jc-c'>
              {v.label}
            </GridCell>
          ))}
        </GridRow>

        {current.map((v, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <GridRow
            key={`row_${v.index}_${v.name}`}
            data-type='body'
            onClick={() => {
              gridRowClickHandler(v)
            }}
          >
            {headers.map((w) => (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={`cell_${v.index}_${v.name}_${w.value}_${i}`}>
                {renderText(v, w.value)}
              </Fragment>
            ))}
          </GridRow>
        ))}
      </GridContainer>

      {data.length >= visibleCount && (
        <div
          className='flex h100 ai-c jc-c'
          style={{ padding: '16px' }}
          ref={current.length >= LOADER ? loaderRef : undefined}
        >
          <Loader />
        </div>
      )}
    </>
  )
}
