import React from 'react';
import { Portrait } from '@components';
import { CellBox, Ellipsis } from '@domain/Item/ItemTable/styles';
import { get } from '@util/fetching';
import { CONSTANCE, VALUE } from '@domain/Item/const';

export type ColumnType = {
  basis: string;
  minWidth: string;
  render?: (v: ItemInterface) => React.ReactNode;
} & OptionType<ItemInterfaceIndex, string>;

const stroker = (types?: string, domain?: string): StrokeType => {
  if (domain !== 'gun') return 'default';

  switch (types) {
    case 'ap':
      return 'blue';
    case 'he':
      return 'red';
    case 'normal':
    case 'type3':
      return 'yellow';
    case 'sap':
      return 'violet';
    default:
      return 'default';
  }
};

const classDelimiter = (value: ItemInterface) => {
  if (value.domain && value.class) {
    if (value.domain === VALUE.GUN) {
      switch (value.class) {
        case CONSTANCE.GUN.DD.value:
          return CONSTANCE.GUN.DD.label;
        // return value.nation !== 'MOT' ? '구축포' : '범선소형포';
        case CONSTANCE.GUN.CL.value:
          return CONSTANCE.GUN.CL.label;
        case CONSTANCE.GUN.CA.value:
          return CONSTANCE.GUN.CA.label;
        case CONSTANCE.GUN.BB.value:
          return CONSTANCE.GUN.BB.label;
        // return value.nation !== 'MOT' ? '전함포' : '범선대형포';
        case CONSTANCE.GUN.CB.value:
          return CONSTANCE.GUN.CB.label;
      }
    } else if (value.domain === VALUE.TORPEDO) {
      switch (value.class) {
        case CONSTANCE.TORPEDO.SR.value:
          return CONSTANCE.TORPEDO.SR.label;
        case CONSTANCE.TORPEDO.SB.value:
          return CONSTANCE.TORPEDO.SB.label;
        case CONSTANCE.TORPEDO.MS.value:
          return CONSTANCE.TORPEDO.MS.label;
      }
    } else if (value.domain === VALUE.ANTIAIR) {
      switch (value.class) {
        case CONSTANCE.ANTIAIR.NOR.value:
          return CONSTANCE.ANTIAIR.NOR.label;
        case CONSTANCE.ANTIAIR.FUS.value:
          return CONSTANCE.ANTIAIR.FUS.label;
      }
    } else if (value.domain === VALUE.AIRCRAFT) {
      switch (value.class) {
        case CONSTANCE.AIRCRAFT.FA.value:
          return CONSTANCE.AIRCRAFT.FA.label;
        case CONSTANCE.AIRCRAFT.BA.value:
          return CONSTANCE.AIRCRAFT.BA.label;
        case CONSTANCE.AIRCRAFT.SA.value:
          return CONSTANCE.AIRCRAFT.SA.label;
        case CONSTANCE.AIRCRAFT.TA.value:
          return CONSTANCE.AIRCRAFT.TA.label;
      }
    } else if (value.domain === VALUE.ACCESSORY) {
      switch (value.class) {
        case CONSTANCE.ACCESSORY.BL.value:
          return CONSTANCE.ACCESSORY.BL.label;
        case CONSTANCE.ACCESSORY.FL.value:
          return CONSTANCE.ACCESSORY.FL.label;
        case CONSTANCE.ACCESSORY.SIG.value:
          return CONSTANCE.ACCESSORY.SIG.label;
      }
    } else if (value.domain === VALUE.SPECIAL) {
      // switch (value.class) {
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
      switch (value.class) {
        case CONSTANCE.SPECIAL.NOR.value:
          return CONSTANCE.SPECIAL.NOR.label;
        case CONSTANCE.SPECIAL.SIG.value:
          return CONSTANCE.SPECIAL.SIG.label;
      }
    }
  }

  return '';
};

const typeDelimiter = (value: ItemInterface) => {
  if (value.domain && value.type) {
    if (value.domain === 'gun') {
      switch (value.type) {
        case 'normal':
          return '통상탄';
        case 'he':
          return '고폭탄';
        case 'ap':
          return '철갑탄';
        case 'sap':
          return 'SAP탄';
        case 'type3':
          return '삼식탄';
      }
    } else if (value.domain === 'torpedo') {
      switch (value.type) {
        case 'passive':
          return '수동';
        case 'active':
          return '유도';
        // case 'missile':
        //   return '미사일';
      }
    }
    // else if (value.domain === 'antiair') {
    //   switch (value.type) {
    //     case 'normal':
    //       return '일반';
    //     case 'fuse':
    //       return '시한신관';
    //   }
    // }
    else if (value.domain === 'aircraft') {
      switch (value.type) {
        case 'old':
          return '구3대장';
        case 'old low':
          return '구3대장↓';
        case 'old over':
          return '구3대장↑';
        case 'new':
          return '3대장';
        case 'dogfight':
          return '도그파이트';
        case 'hornet material':
          return '시호넷 재료';
        case 'deprecated':
          return '안씀';
        case 'rocket':
          return '로켓장착';
        case 'god':
          return '신';
        case 'cooldown':
          return '사속조절';
        case 'normal':
          return '일반';
        case 'shit':
          return '쓰레기';
        case 'straight':
          return '직선';
        case 'focus':
          return '핀포인트';
      }
    } else if (value.domain === 'accessory') {
      switch (value.type) {
        case 'bb':
          return '전함';
        case 'ac':
          return '항모';
        case 'normal':
          return '범용';
        case 'asw':
          return '대잠';
        case 'ss':
          return '잠수함';
        case 'maritime':
          return '운송';
        case 'repair':
          return '공작';
      }
    }
    // else if (value.domain === 'special') {
    //   switch (value.type) {
    //     case 'normal':
    //       return '공용';
    //     case 'signiture':
    //       return '전용';
    //   }
    // }
  }

  return '';
};

export const COLUMNS: ColumnType[] = [
  {
    value: 'link',
    label: '아이콘',
    basis: '90px',
    minWidth: '64px',
    render: (v) => (
      <Portrait
        src={`images/items/${v.image}.png`}
        placeholder={`images/items/${v.image}_lqip.png`}
        stroke={stroker(v.type, v.domain)}
        tier={v.tier}
      />
    ),
  },
  { value: 'name', label: '장비명', basis: '240px', minWidth: '180px' },
  {
    value: 'nickname',
    label: '별명',
    basis: '150px',
    minWidth: '100px',
    render: (v) =>
      (v.nickname?.length ?? 0) > 0 ? v.nickname?.replace(/,/g, ', ') : '-',
  },
  {
    value: 'obtain',
    label: '획득처',
    basis: '240px',
    minWidth: '160px',
    render: (v) => (
      <CellBox>{v.obtain?.map((u) => <span key={u}>{u}</span>)}</CellBox>
    ),
  },
  { value: 'nation', label: '국가', basis: '100px', minWidth: '60px' },
  {
    value: 'class',
    label: '구분',
    basis: '100px',
    minWidth: '60px',
    render: (v) => classDelimiter(v),
  },
  {
    value: 'type',
    label: '종류',
    basis: '100px',
    minWidth: '60px',
    render: (v) => typeDelimiter(v),
  },
  {
    value: 'explain',
    label: '설명',
    basis: '468px',
    minWidth: '200px',
    render: (v) => <Ellipsis>{v.explain?.join('. ')}</Ellipsis>,
  },
];

export const getJson = async (target: ItemURL): Promise<ItemInterface[]> => {
  const g = async (url: string) =>
    (await get<ItemInterface[]>(`/json/${url}.json`)) ?? [];

  if (target !== 'all') {
    return await g(target);
  } else {
    const url: ItemURL[] = [
      VALUE.GUN,
      VALUE.TORPEDO,
      VALUE.ANTIAIR,
      VALUE.AIRCRAFT,
      VALUE.ACCESSORY,
      // VALUE.SPECIAL,
    ];
    let result: ItemInterface[] = [];
    for (let i = 0; i < url.length; i++) {
      // const res = (await get<ItemInterface[]>(`/json/${url[i]}.json`)) ?? [];
      const res = await g(url[i]);
      result = result.concat(res);
    }

    return result;
  }
};
