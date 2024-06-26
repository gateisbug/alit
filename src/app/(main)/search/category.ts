const categories = [
  {
    title: '전체',
    items: [{ name: '전체 아이템', path: '/item' }],
  },
  {
    title: '함포',
    items: [
      { name: '전체', path: '/item/gun' },
      { name: '구축함포', path: '/item/gun?filter=dd' },
      { name: '경순함포', path: '/item/gun?filter=cl' },
      { name: '중순함포', path: '/item/gun?filter=ca' },
      { name: '전함포', path: '/item/gun?filter=bb' },
      { name: '대순함포', path: '/item/gun?filter=cb' },
    ],
  },
  {
    title: '항공기',
    items: [
      { name: '전체', path: '/item/aircraft' },
      { name: '전투기', path: '/item/aircraft?filter=fighter' },
      { name: '폭격기', path: '/item/aircraft?filter=bomber' },
      { name: '뇌격기', path: '/item/aircraft?filter=torpedo-bomber' },
      { name: '수상기', path: '/item/aircraft?filter=seaplane' },
    ],
  },
  {
    title: '어뢰',
    items: [
      { name: '전체', path: '/item/torpedo' },
      { name: '수면', path: '/item/torpedo?filter=surface' },
      { name: '잠수', path: '/item/torpedo?filter=submarine' },
      { name: '미사일', path: '/item/torpedo?filter=missile' },
    ],
  },
  {
    title: '대공포',
    items: [
      { name: '전체', path: '/item/antiair' },
      { name: '일반', path: '/item/antiair?filter=normal' },
      { name: '신관', path: '/item/antiair?filter=fuse' },
    ],
  },
  {
    title: '설비',
    items: [
      { name: '전체', path: '/item/accessory' },
      { name: '전열', path: '/item/accessory?filter=frontline' },
      { name: '후열', path: '/item/accessory?filter=backline' },
      { name: '특수', path: '/item/accessory?filter=signiture' },
    ],
  },
  {
    title: '특수',
    items: [{ name: '공용', path: '/item/special' }],
  },
]

export default categories
