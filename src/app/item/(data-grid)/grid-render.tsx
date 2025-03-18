import Portrait from '@components/(common)/portrait.tsx'
import { GridLink } from '@components/item/(data-grid).ts'
import { ITEMS, NATIONS } from '@util/divider'
import highlightText from '@util/highlightText.tsx'

const headerOptions: OptionType<keyof ItemInterface>[] = [
  {
    label: '아이콘',
    value: 'image',
  },
  {
    label: '장비명',
    value: 'name',
  },
  {
    label: '별명',
    value: 'nickname',
  },
  {
    label: '획득처',
    value: 'obtain',
  },
  {
    label: '국가',
    value: 'nation',
  },
  {
    label: '구분',
    value: 'class',
  },
  {
    label: '종류',
    value: 'type',
  },
  {
    label: '설명',
    value: 'explain',
  },
]

export const headers = Object.freeze(headerOptions)

function img(item: ItemInterface) {
  const stroke = (() => {
    if (item.domain !== 'gun') return 'default'
    switch (item.type) {
      case 'ap':
        return 'blue'
      case 'he':
        return 'red'
      case 'normal':
      case 'type3':
        return 'yellow'
      case 'sap':
        return 'violet'
      default:
        return 'default'
    }
  })()

  return (
    <Portrait
      path={`images/items/${item?.image}_x48.webp`}
      lqip={`images/items/${item?.image}_lqip.webp`}
      tier={item.tier}
      stroke={stroke}
    />
  )
}

function name(item: ItemInterface, keyword?: string) {
  const { name: n = '' } = item

  if (keyword) return highlightText(n, keyword)
  return n
}

function nickname(item: ItemInterface, keyword?: string) {
  const { nickname: n = '' } = item
  const returnValue =
    ((n?.length ?? 0) > 0 ? n?.replace(/,/g, ', ') : '-') ?? '-'

  if (keyword) return highlightText(returnValue, keyword)
  return returnValue
}

function nation(item: ItemInterface, target?: 'prefix' | 'nation' | 'box') {
  const { nation: n } = item

  if (target === 'prefix') return n ?? 'ALL'
  return (
    NATIONS.find((v) => v.index === n && v.value === target)?.label ?? '전체'
  )
}

function obtain(item: ItemInterface) {
  const { obtain: o } = item
  const map = o?.map((v) => v.split(':'))

  const spliter = (v: string[]) => {
    switch (v?.[0]) {
      case '군부연구실':
        return `${v?.[0]}: ${v?.[1] ?? '?'}`
      case '상자깡':
        return `${v?.[0]}: ${nation(item, 'box')}(${v?.[1]})`
      case '장비개발':
        return `${v?.[0]}: ${nation(item, 'nation')}`
      case '이벤트':
        return `${v?.[1]}`
      default:
        return v?.[0]
    }
  }

  return map
    ?.map(spliter)
    .map((u, _, a) =>
      a.length > 2 && u.includes('메인') ? null : <span key={u}>{u}</span>,
    )
}

function classes(item: ItemInterface) {
  const { domain: d, class: c } = item
  const find = ITEMS.find((v) => v.index === d && v.value === c)?.label ?? '-'
  // return ITEMS.find((v) => v.index === d && v.value === c)?.label ?? '-'
  return (
    <GridLink
      to={`?major=${d}&minor=${c}`}
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      {find}
    </GridLink>
  )
}

function types(item: ItemInterface) {
  const { domain: d, type: t } = item
  const find = ITEMS.find((v) => v.index === d && v.value === t)?.label ?? t
  return (
    <GridLink
      to={`?major=${d}&type=${t}`}
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      {find}
    </GridLink>
  )
}

function explain(item: ItemInterface, keyword?: string) {
  const { explain: e } = item
  const returnValue = e?.join('. ') ?? '-'

  if (keyword)
    return <div className='el-2'>{highlightText(returnValue, keyword)}</div>
  return <div className='el-2'>{e?.join('. ')}</div>
}

export const render = Object.freeze({
  img,
  name,
  nickname,
  obtain,
  nation,
  class: classes,
  type: types,
  explain,
})
