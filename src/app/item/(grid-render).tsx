import {
  AZURLANE_NATION,
  ITEM_DOMAIN_CLASS,
  ITEM_DOMAIN_TYPE,
} from '@util/item/const.ts'

import Portrait from './(portrait).tsx'

function img(item: ItemInterface) {
  return <Portrait item={item} />
}

function nickname(item: ItemInterface) {
  const { nickname: n } = item
  return (n?.length ?? 0) > 0 ? n?.replace(/,/g, ', ') : '-'
}

function nation(item: ItemInterface, target?: 'prefix' | 'nation' | 'box') {
  const { nation: n } = item
  return AZURLANE_NATION[n ?? '']?.[target ?? 'prefix'] ?? '전체'
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
  return ITEM_DOMAIN_CLASS[d ?? '']?.[c ?? '']?.label ?? '-'
}

function types(item: ItemInterface) {
  const { domain: d, type: t } = item
  return ITEM_DOMAIN_TYPE[d ?? '']?.[t ?? '']?.label ?? ''
}

function explain(item: ItemInterface) {
  const { explain: e } = item
  return <div className='el-2'>{e?.join('. ')}</div>
}

const render = {
  img,
  nickname,
  obtain,
  nation,
  class: classes,
  type: types,
  explain,
}

export default render
