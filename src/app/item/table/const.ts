type ItemIndexType =
  | 'ALL'
  | 'GUN'
  | 'TORPEDO'
  | 'ANTIAIR'
  | 'AIRCRAFT'
  | 'ACCESSORY'
  | 'SPECIAL'

// export const INDEX: ItemIndexType[] = [
//   'ALL',
//   'GUN',
//   'TORPEDO',
//   'ANTIAIR',
//   'AIRCRAFT',
//   'ACCESSORY',
//   'SPECIAL',
// ]

// export const PATH: Record<ItemIndexType, string> = {
//   ALL: '/item',
//   GUN: '/item/gun',
//   TORPEDO: '/item/torpedo',
//   ANTIAIR: '/item/antiair',
//   AIRCRAFT: '/item/aircraft',
//   ACCESSORY: '/item/accessory',
//   SPECIAL: '/item/special',
// }

export const VALUE: Record<ItemIndexType, ItemURL> = {
  ALL: 'all',
  GUN: 'gun',
  TORPEDO: 'torpedo',
  ANTIAIR: 'antiair',
  AIRCRAFT: 'aircraft',
  ACCESSORY: 'accessory',
  SPECIAL: 'special',
}

// export const TEXT: Record<ItemIndexType, string> = {
//   ALL: '전체',
//   GUN: '함포',
//   TORPEDO: '어뢰',
//   ANTIAIR: '대공',
//   AIRCRAFT: '함재기',
//   ACCESSORY: '설비',
//   SPECIAL: '특수',
// }

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
}

type ItemType = OptionType<string, string>

// export const CLASSES: Record<ItemIndexType, ItemType[]> = {
//   ALL: [],
//   GUN: [
//     CONSTANCE.GUN.DD,
//     CONSTANCE.GUN.CL,
//     CONSTANCE.GUN.CA,
//     CONSTANCE.GUN.BB,
//     CONSTANCE.GUN.CB,
//   ],
//   TORPEDO: [CONSTANCE.TORPEDO.SR, CONSTANCE.TORPEDO.SB, CONSTANCE.TORPEDO.MS],
//   ANTIAIR: [CONSTANCE.ANTIAIR.NOR, CONSTANCE.ANTIAIR.FUS],
//   AIRCRAFT: [
//     CONSTANCE.AIRCRAFT.FA,
//     CONSTANCE.AIRCRAFT.BA,
//     CONSTANCE.AIRCRAFT.SA,
//     CONSTANCE.AIRCRAFT.TA,
//   ],
//   ACCESSORY: [
//     CONSTANCE.ACCESSORY.BL,
//     CONSTANCE.ACCESSORY.FL,
//     CONSTANCE.ACCESSORY.SIG,
//   ],
//   SPECIAL: [CONSTANCE.SPECIAL.NOR, CONSTANCE.SPECIAL.SIG],
// }

export function classSorter(value?: ItemInterface) {
  if (value?.domain && value?.class) {
    if (value?.domain === VALUE.GUN) {
      switch (value?.class) {
        case CONSTANCE.GUN.DD.value:
          return CONSTANCE.GUN.DD.label
        // return value.nation !== 'MOT' ? '구축포' : '범선소형포';
        case CONSTANCE.GUN.CL.value:
          return CONSTANCE.GUN.CL.label
        case CONSTANCE.GUN.CA.value:
          return CONSTANCE.GUN.CA.label
        case CONSTANCE.GUN.BB.value:
          return CONSTANCE.GUN.BB.label
        // return value.nation !== 'MOT' ? '전함포' : '범선대형포';
        case CONSTANCE.GUN.CB.value:
          return CONSTANCE.GUN.CB.label
        default:
          return ''
      }
    } else if (value?.domain === VALUE.TORPEDO) {
      switch (value?.class) {
        case CONSTANCE.TORPEDO.SR.value:
          return CONSTANCE.TORPEDO.SR.label
        case CONSTANCE.TORPEDO.SB.value:
          return CONSTANCE.TORPEDO.SB.label
        case CONSTANCE.TORPEDO.MS.value:
          return CONSTANCE.TORPEDO.MS.label
        default:
          return ''
      }
    } else if (value?.domain === VALUE.ANTIAIR) {
      switch (value?.class) {
        case CONSTANCE.ANTIAIR.NOR.value:
          return CONSTANCE.ANTIAIR.NOR.label
        case CONSTANCE.ANTIAIR.FUS.value:
          return CONSTANCE.ANTIAIR.FUS.label
        default:
          return ''
      }
    } else if (value?.domain === VALUE.AIRCRAFT) {
      switch (value?.class) {
        case CONSTANCE.AIRCRAFT.FA.value:
          return CONSTANCE.AIRCRAFT.FA.label
        case CONSTANCE.AIRCRAFT.BA.value:
          return CONSTANCE.AIRCRAFT.BA.label
        case CONSTANCE.AIRCRAFT.SA.value:
          return CONSTANCE.AIRCRAFT.SA.label
        case CONSTANCE.AIRCRAFT.TA.value:
          return CONSTANCE.AIRCRAFT.TA.label
        default:
          return ''
      }
    } else if (value?.domain === VALUE.ACCESSORY) {
      switch (value?.class) {
        case CONSTANCE.ACCESSORY.BL.value:
          return CONSTANCE.ACCESSORY.BL.label
        case CONSTANCE.ACCESSORY.FL.value:
          return CONSTANCE.ACCESSORY.FL.label
        case CONSTANCE.ACCESSORY.SIG.value:
          return CONSTANCE.ACCESSORY.SIG.label
        default:
          return ''
      }
    } else if (value?.domain === VALUE.SPECIAL) {
      // switch (value?.class) {
      //   case 'dd':
      //     return '구축';
      //   case 'cl':
      //     return '경순';
      //   case 'ca&cb':
      //     return '중순&대순';
      //   case 'bb':
      //     return '전함';
      //   case 'ac':
      //     return '항모';
      //   case 'ss':
      //     return '잠수';
      //   case 'signiture':
      //     return '전용';
      // }
      switch (value?.class) {
        case CONSTANCE.SPECIAL.NOR.value:
          return CONSTANCE.SPECIAL.NOR.label
        case CONSTANCE.SPECIAL.SIG.value:
          return CONSTANCE.SPECIAL.SIG.label
        default:
          return ''
      }
    }
  }

  return ''
}

export function typeSorter(value?: ItemInterface) {
  if (value?.domain && value.type) {
    if (value?.domain === 'gun') {
      switch (value.type) {
        case 'normal':
          return '통상탄'
        case 'he':
          return '고폭탄'
        case 'ap':
          return '철갑탄'
        case 'sap':
          return 'SAP탄'
        case 'type3':
          return '삼식탄'
        default:
          return ''
      }
    } else if (value?.domain === 'torpedo') {
      switch (value.type) {
        case 'passive':
          return '수동'
        case 'active':
          return '유도'
        // case 'missile':
        //   return '미사일';
        default:
          return ''
      }
    }
    // else if (value?.domain === 'antiair') {
    //   switch (value.type) {
    //     case 'normal':
    //       return '일반';
    //     case 'fuse':
    //       return '시한신관';
    //   }
    // }
    else if (value?.domain === 'aircraft') {
      switch (value.type) {
        case 'old':
          return '구3대장'
        case 'old low':
          return '구3대장↓'
        case 'old over':
          return '구3대장↑'
        case 'new':
          return '3대장'
        case 'dogfight':
          return '도그파이트'
        case 'hornet material':
          return '시호넷 재료'
        case 'deprecated':
          return '안씀'
        case 'rocket':
          return '로켓장착'
        case 'god':
          return '신'
        case 'cooldown':
          return '사속조절'
        case 'normal':
          return '일반'
        case 'shit':
          return '쓰레기'
        case 'straight':
          return '직선'
        case 'focus':
          return '핀포인트'
        default:
          return ''
      }
    } else if (value?.domain === 'accessory') {
      switch (value.type) {
        case 'bb':
          return '전함'
        case 'ac':
          return '항모'
        case 'normal':
          return '범용'
        case 'asw':
          return '대잠'
        case 'ss':
          return '잠수함'
        case 'maritime':
          return '운송'
        case 'repair':
          return '공작'
        default:
          return ''
      }
    } else if (value?.domain === 'special') {
      switch (value.type) {
        case 'dd':
          return '구축'
        case 'cl':
          return '경순'
        case 'ca&cb':
          return '중·대순'
        case 'bb':
          return '전함'
        case 'ac':
          return '항모'
        case 'ss':
          return '잠수'
        default:
          return ''
      }
    }
  }

  return ''
}

export function nationSplit(
  nation?: string,
  format?: 'prefix' | 'nation' | 'box',
) {
  if (format === 'nation') {
    switch (nation) {
      case 'USS':
        return '이글'
      case 'HMS':
        return '로열'
      case 'IJN':
        return '중앵'
      case 'KMS':
      case 'SMS':
        return '철혈'
      case 'ROC':
      case 'PRAN':
        return '이스트'
      case 'SN':
        return '북련'
      case 'FFNF':
      case 'MNF':
        return '엘랑'
      case 'RN':
        return '사르데냐'
      case 'MOT':
        return '템페스타'
      default:
        return '전체'
    }
  }
  if (format === 'box') {
    switch (nation) {
      case 'USS':
        return '크록히드'
      case 'HMS':
        return '비스커'
      case 'IJN':
        return '자오중공'
      case 'KMS':
      case 'SMS':
        return '크라프'
      case 'ROC':
      case 'PRAN':
        return '이스트'
      case 'SN':
        return '북련'
      case 'FFNF':
      case 'MNF':
        return '아이리스'
      case 'RN':
        return '사르데냐'
      case 'MOT':
        return '템페스타'
      default:
        return '전체'
    }
  }
  return nation
}

export function obtainSplit(value?: ItemInterface) {
  const map = value?.obtain?.map((v) => v.split(':'))

  const spliter = (v: string[]) => {
    switch (v[0]) {
      // case '메인':
      //   return v[0];
      case '군부연구실':
        return `${v[0]}: ${v[1] ?? '?'}`
      case '상자깡':
        return `${v[0]}: ${nationSplit(value?.nation, 'box')}(${v[1]})`
      case '장비개발':
        return `${v[0]}: ${nationSplit(value?.nation, 'nation')}`
      case '이벤트':
        return `${v[1]}`
      default:
        return v[0]
    }
  }

  return map?.map(spliter)
}

type StrokeType = 'default' | 'red' | 'yellow' | 'blue' | 'violet'
export function strokeSorter(types?: string, domain?: string): StrokeType {
  if (domain !== 'gun') return 'default'

  switch (types) {
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
}
