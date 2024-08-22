import { Fragment, useCallback, useState } from 'react'

import {
  GridCell,
  GridContainer,
  GridRow,
} from '@components/item/(data-grid).ts'

import { headers } from './(const).ts'

interface Props {
  data: ItemInterface[]
}

export default function DataGrid({ data }: Props) {
  const [current] = useState<ItemInterface[]>(data.slice(0, 10))

  const renderText = useCallback((d: ItemInterface, h: keyof ItemInterface) => {
    switch (h) {
      case 'image':
        return <GridCell className='jc-c'>{d[h]}</GridCell>
      case 'name':
        return <GridCell className='jc-c ta-c word-break'>{d[h]}</GridCell>
      case 'obtain':
        return (
          <GridCell className='column al-s jc-c'>
            {d[h]?.map((v) => <span key={v}>{v}</span>)}
          </GridCell>
        )
      case 'class':
        return <GridCell className='jc-c'>{d[h]}</GridCell>
      case 'type':
        return <GridCell className='jc-c'>{d[h]}</GridCell>
      case 'explain':
        return (
          <GridCell>
            <div className='el-2'>{d[h]?.join('.\n')}</div>
          </GridCell>
        )
      default:
        return <GridCell className='jc-c'>{d[h]}</GridCell>
    }
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
        <GridRow key={`row_${v.index}_${v.tier}_${v.name}`} data-type='body'>
          {headers.map((w) => (
            <Fragment key={`cell_${v[w.value]}_${i}`}>
              {renderText(v, w.value)}
            </Fragment>
          ))}
        </GridRow>
      ))}
    </GridContainer>
  )
}
