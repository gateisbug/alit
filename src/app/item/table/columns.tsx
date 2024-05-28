import Portrait from '@app/item/common/portrait'
import { Ellipsis, Wall } from '@components/item'
import { classSorter, obtainSplit, typeSorter } from '@util/item/const'
import { ReactNode } from 'react'

type ColumnType = {
  render?: (v: ItemInterface) => ReactNode
} & OptionType<ItemInterfaceIndex, string>

export const COLUMNS: ColumnType[] = [
  {
    value: 'link',
    label: '아이콘',
    render: (v) => (
      <Portrait item={v} size={48} style={{ width: '4rem', height: '4rem' }} />
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
        {obtainSplit(v)?.map((u, _, a) =>
          a.length > 2 && u.includes('메인') ? null : <span key={u}>{u}</span>,
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
