export const ITEM_DOMAIN_CLASS: Record<ItemDomain, Record<ItemClass, OptionType>> = {
  // all: {},
  gun: {
    dd: { value: 'dd', label: '구축포' },
    cl: { value: 'cl', label: '경순포' },
    ca: { value: 'ca', label: '중순포' },
    bb: { value: 'bb', label: '전함포' },
    cb: { value: 'cb', label: '대순포' },
  },
  torpedo: {
    surface: { value: 'surface', label: '수면어뢰' },
    submarine: { value: 'submarine', label: '잠수어뢰' },
    missile: { value: 'missile', label: '미사일' },
  },
  antiair: {
    normal: { value: 'normal', label: '일반' },
    fuse: { value: 'fuse', label: '시한신관' },
  },
  aircraft: {
    fighter: { value: 'fighter', label: '전투기' },
    bomber: { value: 'bomber', label: '폭격기' },
    seaplane: { value: 'seaplane', label: '수상기' },
    'torpedo-bomber': { value: 'torpedo-bomber', label: '뇌격기' },
  },
  accessory: {
    backline: { value: 'backline', label: '주력(후열)' },
    frontline: { value: 'frontline', label: '선봉(전열)' },
    signiture: { value: 'signiture', label: '특수' },
  },
  special: {
    normal: { value: 'normal', label: '공용' },
    signiture: { value: 'signiture', label: '전용' },
  },
}

export const ITEM_DOMAIN_TYPE: Record<ItemDomain, Record<string, OptionType>> = {
  // all: {},
  gun: {
    normal: { value: 'normal', label: '통상탄' },
    he: { value: 'he', label: '고폭탄' },
    ap: { value: 'ap', label: '철갑탄' },
    sap: { value: 'sap', label: 'SAP탄' },
    type3: { value: 'type3', label: '삼식탄' },
  },
  torpedo: {
    passive: { value: 'passive', label: '수동' },
    active: { value: 'active', label: '유도' },
  },
  aircraft: {
    old: { value: 'old', label: '구3대장' },
    'old low': { value: 'old low', label: '구3대장↓' },
    'old over': { value: 'old over', label: '구3대장↑' },
    new: { value: 'new', label: '3대장' },
    dogfight: { value: 'dogfight', label: '도그파이트' },
    'hornet material': { value: 'hornet material', label: '시호넷 재료' },
    deprecated: { value: 'deprecated', label: '안씀' },
    rocket: { value: 'rocket', label: '로켓장착' },
    god: { value: 'god', label: '신' },
    cooldown: { value: 'cooldown', label: '사속조절' },
    normal: { value: 'normal', label: '일반' },
    shit: { value: 'shit', label: '쓰레기' },
    straight: { value: 'straight', label: '직선' },
    focus: { value: 'focus', label: '핀포인트' },
  },
  accessory: {
    bb: { value: 'bb', label: '전함' },
    ac: { value: 'ac', label: '항모' },
    normal: { value: 'normal', label: '범용' },
    asw: { value: 'asw', label: '대잠' },
    ss: { value: 'ss', label: '잠수함' },
    maritime: { value: 'maritime', label: '운송' },
    repair: { value: 'repair', label: '공작' },
  },
  special: {
    dd: { value: 'dd', label: '구축' },
    cl: { value: 'cl', label: '경순' },
    'ca&cb': { value: 'ca&cb', label: '중·대순' },
    bb: { value: 'bb', label: '전함' },
    ac: { value: 'ac', label: '항모' },
    ss: { value: 'ss', label: '잠수' },
  },
}

type NationRecords = {
  prefix: string
  nation: string
  box: string
}

export const AZURLANE_NATION: Record<NationType, NationRecords> = {
  USS: {
    prefix: 'USS',
    nation: '이글',
    box: '크록히드'
  },
  HMS: {
    prefix: 'HMS',
    nation: '로열',
    box: '비스커'
  },
  IJN: {
    prefix: 'IJN',
    nation: '중앵',
    box: '자오중공'
  },
  KMS: {
    prefix: 'KMS',
    nation: '철혈',
    box: '크라프'
  },
  SMS: {
    prefix: 'SMS',
    nation: '철혈',
    box: '크라프'
  },
  ROC: {
    prefix: 'ROC',
    nation: '이스트',
    box: '이스트'
  },
  PRAN: {
    prefix: 'PRAN',
    nation: '이스트',
    box: '이스트'
  },
  SN: {
    prefix: 'SN',
    nation: '북련',
    box: '북련'
  },
  FFNF: {
    prefix: 'FFNF',
    nation: '아이리스',
    box: '아이리스'
  },
  MNF: {
    prefix: 'MNF',
    nation: '비시아',
    box: '비시아'
  },
  RN: {
    prefix: 'RN',
    nation: '사르데냐',
    box: '사르데냐'
  },
  MOT: {
    prefix: 'MOT',
    nation: '템페스타',
    box: '템페스타'
  },
}