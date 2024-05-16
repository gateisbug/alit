import { ReactNode } from 'react'

import Portrait from '@app/item/table/portrait'
import { Ellipsis, Wall } from '@datum/item'

import { classSorter, obtainSplit, strokeSorter, typeSorter } from './const'

type ColumnType = {
  render?: (v: ItemInterface) => ReactNode
} & OptionType<ItemInterfaceIndex, string>

export const COLUMNS: ColumnType[] = [
  {
    value: 'link',
    label: '아이콘',
    render: (v) => (
      <Portrait
        src={`/images/items/${v.image}.png`}
        placeholder={`/images/items/${v.image}_lqip.png`}
        stroke={strokeSorter(v.type, v.domain)}
        tier={v.tier}
      />
    ),
  },
  {
    value: 'name',
    label: '장비명',
  },
  {
    value: 'nickname',
    label: '별명',
    render: (v) =>
      (v.nickname?.length ?? 0) > 0 ? v.nickname?.replace(/,/g, ', ') : '-',
  },
  {
    value: 'obtain',
    label: '획득처',
    render: (v) => (
      <Wall>
        {obtainSplit(v)?.map((u, i, a) =>
          a.length > 2 && u.includes('메인') ? null : <span key={i}>{u}</span>,
        )}
      </Wall>
    ),
  },
  {
    value: 'nation',
    label: '국가',
  },
  {
    value: 'class',
    label: '구분',
    render: (v) => classSorter(v),
  },
  {
    value: 'type',
    label: '종류',
    render: (v) => typeSorter(v),
  },
  {
    value: 'explain',
    label: '설명',
    render: (v) => <Ellipsis>{v.explain?.join('. ')}</Ellipsis>,
  },
]
