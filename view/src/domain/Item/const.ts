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

export const CONSTANCE: Record<ItemIndexType, Record<string, ItemType>> = {
  ALL: {},
  GUN: {
    DD: { value: 'dd', label: '구축포' },
    CL: { value: 'cl', label: '경순포' },
    CA: { value: 'ca', label: '중순포' },
    BB: { value: 'bb', label: '전함포' },
    CB: { value: 'cb', label: '대순포' },
  },
  TORPEDO: {
    SR: { value: 'surface', label: '수면어뢰' },
    SB: { value: 'submarine', label: '잠수어뢰' },
    MS: { value: 'missile', label: '미사일' },
  },
  ANTIAIR: {
    NOR: { value: 'normal', label: '일반' },
    FUS: { value: 'fuse', label: '시한신관' },
  },
  AIRCRAFT: {
    FA: { value: 'fighter', label: '전투기' },
    BA: { value: 'bomber', label: '폭격기' },
    SA: { value: 'seaplane', label: '수상기' },
    TA: { value: 'torpedo-bomber', label: '뇌격기' },
  },
  ACCESSORY: {
    BL: { value: 'backline', label: '주력(후열)' },
    FL: { value: 'frontline', label: '선봉(전열)' },
    SIG: { value: 'signiture', label: '특수' },
  },
  SPECIAL: {
    NOR: { value: 'normal', label: '공용' },
    SIG: { value: 'signiture', label: '전용' },
  },
};

type ItemType = OptionType<string, string>;
export const CLASSES: Record<ItemIndexType, ItemType[]> = {
  ALL: [],
  GUN: [
    CONSTANCE.GUN.DD,
    CONSTANCE.GUN.CL,
    CONSTANCE.GUN.CA,
    CONSTANCE.GUN.BB,
    CONSTANCE.GUN.CB,
  ],
  TORPEDO: [CONSTANCE.TORPEDO.SR, CONSTANCE.TORPEDO.SB, CONSTANCE.TORPEDO.MS],
  ANTIAIR: [CONSTANCE.ANTIAIR.NOR, CONSTANCE.ANTIAIR.FUS],
  AIRCRAFT: [
    CONSTANCE.AIRCRAFT.FA,
    CONSTANCE.AIRCRAFT.BA,
    CONSTANCE.AIRCRAFT.SA,
    CONSTANCE.AIRCRAFT.TA,
  ],
  ACCESSORY: [
    CONSTANCE.ACCESSORY.BL,
    CONSTANCE.ACCESSORY.FL,
    CONSTANCE.ACCESSORY.SIG,
  ],
  SPECIAL: [CONSTANCE.SPECIAL.NOR, CONSTANCE.SPECIAL.SIG],
};
