export const ITEM_MAJORCATEGORY = Object.freeze([
  // { label: '전체', value: 'all' },
  { label: '함포', value: 'gun' },
  { label: '항공기', value: 'aircraft' },
  { label: '어뢰', value: 'torpedo' },
  { label: '대공포', value: 'antiair' },
  { label: '설비', value: 'accessory' },
  { label: '특수', value: 'special' },
])

export const ITEM_MINORCATEGORY = Object.freeze([
  {
    value: 'gun',
    items: [
      { label: '구축포(부포)', value: 'dd' },
      { label: '경순포(부포)', value: 'cl' },
      { label: '중순포', value: 'ca' },
      { label: '전함포', value: 'bb' },
      { label: '대순포', value: 'cb' },
    ],
  },
  {
    value: 'aircraft',
    items: [
      { label: '전투기', value: 'fighter' },
      { label: '폭격기', value: 'bomber' },
      { label: '뇌격기', value: 'torpedo-bomber' },
      { label: '수상기', value: 'seaplane' },
    ],
  },
  {
    value: 'torpedo',
    items: [
      { label: '수면어뢰', value: 'surface' },
      { label: '잠수어뢰', value: 'submarine' },
      { label: '미사일', value: 'missile' },
    ],
  },
  {
    value: 'antiair',
    items: [
      { label: '일반', value: 'normal' },
      { label: '시한신관', value: 'fuse' },
    ],
  },
  {
    value: 'accessory',
    items: [
      { label: '전열', value: 'front' },
      { label: '후열', value: 'back' },
      { label: '범선', value: 'sailing' },
      { label: '공용', value: 'common' },
      { label: '특수', value: 'signiture' },
    ],
  },
  {
    value: 'special',
    items: [
      { label: '공용', value: 'normal' },
      { label: '전용', value: 'signiture' },
    ],
  },
])

export const ITEM_TYPECATEGORY = Object.freeze([
  {
    value: 'gun',
    items: [
      { label: '통상탄', value: 'normal' },
      { label: '고폭탄', value: 'he' },
      { label: '철갑탄', value: 'ap' },
      { label: 'SAP탄', value: 'sap' },
    ],
  },
  {
    value: 'aircraft',
    items: [
      { label: '구3대장', value: 'old' },
      { label: '구3대장급', value: 'old low' },
      { label: '구3대장↑', value: 'old over' },
      { label: '3대장', value: 'new' },
      { label: '로켓장착', value: 'rocket' },
      { label: '시호넷 재료', value: 'hornet+material' },
      { label: '도그파이트', value: 'dogfight' },
      { label: '안씀', value: 'deprecated' },
      { label: '신', value: 'god' },
      { label: '일반', value: 'normal' },
      { label: '사속조절', value: 'cooldown' },
      { label: '쓰레기', value: 'shit' },
      { label: '핀포인트', value: 'focus' },
      { label: '직선', value: 'straight' },
    ],
  },
  {
    value: 'aircraft',
    items: [
      { label: '유도', value: 'active' },
      { label: '수동', value: 'passive' },
    ],
  },
  {
    value: 'special',
    items: [
      { label: '구축', value: 'dd' },
      { label: '경순', value: 'cl' },
      { label: '중·대순', value: 'ca+cb' },
      { label: '전함', value: 'bb' },
      { label: '항모', value: 'ac' },
      { label: '잠수', value: 'ss' },
    ],
  },
  // {
  //   value: 'aircraft',
  //   items: [
  //     { label: '전체', value: 'all',  },
  //     { label: '', value: 'old',  },
  //     { label: '3대장', value: 'new',  },
  //     { label: '로켓장착', value: 'new',  },
  //     { label: '도그파이트', value: 'new',  },
  //     { label: '신', value: 'new',  },
  //   ],
  // },
  // {
  //   value: 'torpedo',
  //   items: [
  //     { label: '전체', value: 'all' },
  //     { label: '수동', value: 'normal' },
  //     { label: '유도', value: 'active' },
  //   ],
  // },
])

export const RARITY = Object.freeze([
  // {
  //   label: 'N',
  //   value: 'N',
  // },
  {
    label: 'R',
    value: 'R',
  },
  {
    label: 'SR',
    value: 'SR',
  },
  {
    label: 'SSR',
    value: 'SSR',
  },
  {
    label: 'UR',
    value: 'UR',
  },
])

export const NATION = Object.freeze([
  {
    label: '이글',
    value: 'USS',
  },
  {
    label: '로열',
    value: 'HMS',
  },
  {
    label: '중앵',
    value: 'IJN',
  },
  {
    label: '철혈',
    value: 'KMS',
  },
  {
    label: '이스트',
    value: 'ROC',
  },
  {
    label: '사르데냐',
    value: 'RN',
  },
  {
    label: '북련',
    value: 'SN',
  },
  {
    label: '아이리스',
    value: 'FFNF',
  },
  {
    label: '튤리파',
    value: 'HNLMS',
  },
  {
    label: '비시아',
    value: 'MNF',
  },
  {
    label: '템페스타',
    value: 'MOT',
  },
  {
    label: '공용',
    value: 'UNIV',
  },
])
