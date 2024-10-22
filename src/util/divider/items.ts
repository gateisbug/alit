const ITEMS = [
  {
    index: 'gun',
    value: 'gun',
    label: '함포',
  },
  {
    index: 'gun',
    value: 'dd',
    label: '구축포',
  },
  {
    index: 'gun',
    value: 'cl',
    label: '경순포',
  },
  {
    index: 'gun',
    value: 'ca',
    label: '중순포',
  },
  {
    index: 'gun',
    value: 'bb',
    label: '전함포',
  },
  {
    index: 'gun',
    value: 'cb',
    label: '대순포',
  },
  {
    index: 'torpedo',
    value: 'torpedo',
    label: '어뢰',
  },
  {
    index: 'torpedo',
    value: 'surface',
    label: '수면어뢰',
  },
  {
    index: 'torpedo',
    value: 'submarine',
    label: '잠수어뢰',
  },
  {
    index: 'torpedo',
    value: 'missile',
    label: '미사일',
  },
  {
    index: 'antiair',
    value: 'antiair',
    label: '대공포',
  },
  {
    index: 'antiair',
    value: 'normal',
    label: '일반',
  },
  {
    index: 'antiair',
    value: 'fuse',
    label: '시한신관',
  },
  {
    index: 'aircraft',
    value: 'aircraft',
    label: '항공기',
  },
  {
    index: 'aircraft',
    value: 'fighter',
    label: '전투기',
  },
  {
    index: 'aircraft',
    value: 'bomber',
    label: '폭격기',
  },
  {
    index: 'aircraft',
    value: 'seaplane',
    label: '수상기',
  },
  {
    index: 'aircraft',
    value: 'torpedo-bomber',
    label: '뇌격기',
  },
  {
    index: 'accessory',
    value: '설비',
    label: '주력(후열)',
  },
  {
    index: 'accessory',
    value: 'backline',
    label: '주력(후열)',
  },
  {
    index: 'accessory',
    value: 'frontline',
    label: '선봉(전열)',
  },
  {
    index: 'accessory',
    value: 'signiture',
    label: '특수',
  },
  {
    index: 'special',
    value: 'special',
    label: '특수장비',
  },
  {
    index: 'special',
    value: 'normal',
    label: '공용',
  },
  {
    index: 'special',
    value: 'signiture',
    label: '전용',
  },

  {
    index: 'gun',
    value: 'normal',
    label: '통상탄',
  },
  {
    index: 'gun',
    value: 'he',
    label: '고폭탄',
  },
  {
    index: 'gun',
    value: 'ap',
    label: '철갑탄',
  },
  {
    index: 'gun',
    value: 'sap',
    label: 'SAP탄',
  },
  {
    index: 'gun',
    value: 'type3',
    label: '삼식탄',
  },

  {
    index: 'torpedo',
    value: 'passive',
    label: '수동',
  },
  {
    index: 'torpedo',
    value: 'active',
    label: '유도',
  },

  {
    index: 'aircraft',
    value: 'old',
    label: '구3대장',
  },
  {
    index: 'aircraft',
    value: 'old low',
    label: '구3대장=',
  },
  {
    index: 'aircraft',
    value: 'old over',
    label: '구3대장↑',
  },
  {
    index: 'aircraft',
    value: 'new',
    label: '3대장',
  },
  {
    index: 'aircraft',
    value: 'dogfight',
    label: '도그파이트',
  },
  {
    index: 'aircraft',
    value: 'hornet material',
    label: '시호넷 재료',
  },
  {
    index: 'aircraft',
    value: 'deprecated',
    label: '안씀',
  },
  {
    index: 'aircraft',
    value: 'rocket',
    label: '로켓장착',
  },
  {
    index: 'aircraft',
    value: 'god',
    label: '신',
  },
  {
    index: 'aircraft',
    value: 'cooldown',
    label: '사속조절',
  },
  {
    index: 'aircraft',
    value: 'normal',
    label: '일반',
  },
  {
    index: 'aircraft',
    value: 'shit',
    label: '쓰레기',
  },
  {
    index: 'aircraft',
    value: 'straight',
    label: '직선',
  },
  {
    index: 'aircraft',
    value: 'focus',
    label: '핀포인트',
  },

  {
    index: 'accessory',
    value: 'bb',
    label: '전함',
  },
  {
    index: 'accessory',
    value: 'ac',
    label: '항모',
  },
  {
    index: 'accessory',
    value: 'normal',
    label: '범용',
  },
  {
    index: 'accessory',
    value: 'asw',
    label: '대잠',
  },
  {
    index: 'accessory',
    value: 'ss',
    label: '잠수함',
  },
  {
    index: 'accessory',
    value: 'maritime',
    label: '운송',
  },
  {
    index: 'accessory',
    value: 'repair',
    label: '공작',
  },

  {
    index: 'special',
    value: 'dd',
    label: '구축',
  },
  {
    index: 'special',
    value: 'cl',
    label: '경순',
  },
  {
    index: 'special',
    value: 'ca&cb',
    label: '중·대순',
  },
  {
    index: 'special',
    value: 'bb',
    label: '전함',
  },
  {
    index: 'special',
    value: 'ac',
    label: '항모',
  },
  {
    index: 'special',
    value: 'ss',
    label: '잠수함',
  },
]

Object.freeze(ITEMS)

export default ITEMS
