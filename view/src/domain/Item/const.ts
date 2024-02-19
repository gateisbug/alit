type ItemIndexType =
  | 'ALL'
  | 'GUN'
  | 'TORPEDO'
  | 'ANTIAIR'
  | 'AIRCRAFT'
  | 'ACCESSORY'
  | 'SPECIAL';

export const INDEX: ItemIndexType[] = [
  'ALL',
  'GUN',
  'TORPEDO',
  'ANTIAIR',
  'AIRCRAFT',
  'ACCESSORY',
  'SPECIAL',
];

export const PATH: Record<ItemIndexType, string> = {
  ALL: '/item',
  GUN: '/item/gun',
  TORPEDO: '/item/torpedo',
  ANTIAIR: '/item/antiair',
  AIRCRAFT: '/item/aircraft',
  ACCESSORY: '/item/accessory',
  SPECIAL: '/item/special',
};

export const VALUE: Record<ItemIndexType, ItemURL> = {
  ALL: 'all',
  GUN: 'gun',
  TORPEDO: 'torpedo',
  ANTIAIR: 'antiair',
  AIRCRAFT: 'aircraft',
  ACCESSORY: 'accessory',
  SPECIAL: 'special',
};

export const TEXT: Record<ItemIndexType, string> = {
  ALL: '전체',
  GUN: '함포',
  TORPEDO: '어뢰',
  ANTIAIR: '대공',
  AIRCRAFT: '함재기',
  ACCESSORY: '설비',
  SPECIAL: '특수',
};

type ItemType = OptionType<string, string>;
export const CLASSES: Record<ItemIndexType, ItemType[]> = {
  ALL: [],
  GUN: [
    { value: 'dd', label: '구축함포' },
    { value: 'cl', label: '경순함포' },
    { value: 'ca', label: '중순함포' },
    { value: 'bb', label: '전함포' },
    { value: 'cb', label: '대순함포' },
  ],
  TORPEDO: [
    { value: 'surface', label: '수면어뢰' },
    { value: 'submarine', label: '잠수어뢰' },
    { value: 'missile', label: '미사일' },
  ],
  ANTIAIR: [
    { value: 'normal', label: '일반' },
    { value: 'fuse', label: '시한신관' },
  ],
  AIRCRAFT: [
    { value: 'fighter', label: '전투기' },
    { value: 'bomber', label: '폭격기' },
    { value: 'seaplane', label: '수상기' },
    { value: 'torpedo-bomber', label: '뇌격기' },
  ],
  ACCESSORY: [
    { value: 'backline', label: '후열' },
    { value: 'frontline', label: '전열' },
    { value: 'signiture', label: '전용' },
  ],
  SPECIAL: [
    { value: 'normal', label: '공용' },
    { value: 'signiture', label: '전용' },
  ],
};
