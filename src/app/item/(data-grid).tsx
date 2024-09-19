import useInfiniteScroll from '@xutil/useInfiniteScroll.ts'
import {
  Fragment,
  lazy,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useLoaderData } from 'react-router-dom'

import Loader from '@components/(common)/loader.tsx'
import {
  GridRow,
  GridContainer,
  GridCell,
} from '@components/item/(data-grid).ts'

import { headers, render } from './(grid-render).tsx'

const ItemModal = lazy(() => import('./(item-modal).tsx'))

const LOADER = 10

export default function ItemDataGrid() {
  const [open] = useState(false)

  const data = useLoaderData() as ItemInterface[]
  const [current, setCurrent] = useState<ItemInterface[]>([])
  const [visibleCount, setVisibleCount] = useState(LOADER)
  const loader = useInfiniteScroll(() => {
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
        // classname = 'jc-c'
        classname = 'jc-c ta-c word-break'
        value = d[h]
        break
    }

    return <GridCell className={classname}>{value}</GridCell>
  }, [])

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
          ref={current.length >= LOADER ? loader : undefined}
        >
          <Loader />
        </div>
      )}

      {open && <ItemModal />}
    </>
  )
}
