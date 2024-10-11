import { Fragment, lazy, type ReactNode, useCallback } from 'react'

import useGridData from '@app/item/(data-grid)/useGridData.ts'
import useInfiniteGrid from '@app/item/(data-grid)/useInfiniteGrid.ts'
import Loader from '@components/(common)/loader.tsx'
import { ITEMMODALKEY } from '@components/(modals)/(modal-keys).ts'
import {
  GridRow,
  GridContainer,
  GridCell,
} from '@components/item/(data-grid).ts'
import useModalStore from '@util/store/modal.ts'

import { headers, render } from './(grid-render).tsx'

const ItemModal = lazy(() => import('@components/(modals)/item/page.tsx'))

function useDataGrid() {
  const data = useGridData()
  const { current, visibleCount, loaderRef, LOADER } = useInfiniteGrid(data)
  const { modalOpen } = useModalStore()

  const renderText = useCallback((d: ItemInterface, h: keyof ItemInterface) => {
    let classname: string = ''
    let value: ReactNode

    switch (h) {
      case 'image':
        classname = 'jc-c'
        value = render.img(d)
        break
      case 'nickname':
        classname = 'jc-c ta-c word-break'
        value = render.nickname(d)
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
        value = render.explain(d)
        break
      default:
        classname = 'jc-c ta-c word-break'
        value = d[h]
        break
    }

    return (
      <GridCell
        className={classname}
        onClick={() => {
          modalOpen({
            id: ITEMMODALKEY,
            children: <ItemModal item={d} />,
          })
        }}
      >
        {value}
      </GridCell>
    )
  }, [])

  return {
    current,
    renderText,
    data,
    visibleCount,
    LOADER,
    loaderRef,
  }
}

export default function ItemDataGrid() {
  const { current, renderText, data, visibleCount, LOADER, loaderRef } =
    useDataGrid()

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
          <GridRow key={`row_${v.index}_${i}`} data-type='body'>
            {headers.map((w) => (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={`cell_${v.index}_${w.value}_${i}`}>
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
