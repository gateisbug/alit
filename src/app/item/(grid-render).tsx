import Portrait from '@components/item/portrait.tsx'
import ITEMS from '@util/divider/items.ts'
import NATIONS from '@util/divider/nations.ts'

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
  return <Portrait path={`images/items/${item?.image}_x48.webp`} item={item} />
}

function nickname(item: ItemInterface) {
  const { nickname: n } = item
  return (n?.length ?? 0) > 0 ? n?.replace(/,/g, ', ') : '-'
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
  return ITEMS.find((v) => v.index === d && v.value === c)?.label ?? '-'
}

function types(item: ItemInterface) {
  const { domain: d, type: t } = item
  return ITEMS.find((v) => v.index === d && v.value === t)?.label ?? '-'
}

function explain(item: ItemInterface) {
  const { explain: e } = item
  return <div className='el-2'>{e?.join('. ')}</div>
}

export const render = Object.freeze({
  img,
  nickname,
  obtain,
  nation,
  class: classes,
  type: types,
  explain,
})
