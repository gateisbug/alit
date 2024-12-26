import { Fragment, ReactNode, useCallback, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { headers, render } from '@app/character/(data-grid)/grid-render.tsx'
import Loader from '@components/(common)/loader.tsx'
import {
  GridCell,
  GridContainer,
  GridRow,
} from '@components/character/(data-grid).ts'
import useModalStore from '@util/store/modal.ts'
import useInfiniteGrid from '@util/useInfiniteGrid.ts'

import useCharData from './useCharData.ts'

// TODO: 모달 추가
// TODO: 키워드 연동

function useDataGrid() {
  const { modalAdd } = useModalStore()

  const data = useCharData()
  const { current, visibleCount, loaderRef, LOADER } =
    useInfiniteGrid<CharacterInterface>(data ?? [])

  const [searchParams, setSearchParams] = useSearchParams()
  const keyword = searchParams.get('keyword') ?? undefined

  const renderText = useCallback(
    (d: CharacterInterface, h: keyof CharacterInterface) => {
      let classname: string = ''
      let value: ReactNode

      switch (h) {
        case 'image':
          value = render.img(d)
          break
        case 'name':
          value = d.name
          break
        case 'stat':
          classname = 'column jc-c'
          value = render.stat(d)
          break
        case 'fleet':
          classname = 'column jc-c'
          value = render.fleet(d)
          break
        case 'tag':
          value = render.tag()
          break
        default:
          classname = 'jc-c ta-c word-break'
          value = d[h]
          break
      }

      return <GridCell className={classname}>{value}</GridCell>
    },
    [],
  )

  // TODO: 모달 연동
  const gridRowClickHandler = (item: ItemInterface) => {
    // modalAdd({
    //   id: ITEMMODALKEY,
    //   children: <ItemModal item={item} />,
    // })
    //
    // searchParams.set('modal', ITEMMODALKEY)
    // setSearchParams(searchParams)
  }

  useEffect(() => {
    console.log(data)
  }, [data])

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

export default function DataGrid() {
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
      <GridContainer>
        <GridRow data-type='head' className='fcs fwb'>
          {headers.map((v) => (
            <GridCell key={`head_${v.value}`} className='jc-c'>
              {v.label}
            </GridCell>
          ))}
        </GridRow>

        {current.map((v) => (
          <GridRow
            key={`row_${v.index}_${v.name}`}
            data-type='body'
            onClick={() => {
              gridRowClickHandler(v)
            }}
          >
            {headers.map((w) => (
              <Fragment key={`cell_${v.index}_${v.name}_${w.value}`}>
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
