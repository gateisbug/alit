import { Fragment, ReactNode, useCallback, useState } from 'react'

import { GridCell, GridContainer, GridRow } from '@components/item'

import { headers } from './(const).ts'
import render from './(grid-render).tsx'

interface Props {
  data: ItemInterface[]
}

export default function DataGrid({ data }: Props) {
  // const [current] = useState<ItemInterface[]>(data.slice(0, 10))
  const [current] = useState<ItemInterface[]>(data)

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
        classname = 'column al-s jc-c'
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
  )
}
