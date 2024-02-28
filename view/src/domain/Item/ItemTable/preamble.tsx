import React from 'react';
import { Portrait } from '@components';
import { CellBox, Ellipsis } from '@domain/Item/ItemTable/styles';
import { get } from '@util/fetching';

export type ColumnType = {
  basis: string;
  minWidth: string;
  render?: (v: ItemInterface) => React.ReactNode;
} & OptionType<ItemInterfaceIndex, string>;

const stroker = (className?: string, domain?: string): StrokeType => {
  if(domain !== 'gun') return 'default';

  switch (className) {
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
    if (value.domain === 'gun') {
      switch (value.class) {
        case 'dd':
          return '구축포';
        // return value.nation !== 'MOT' ? '구축포' : '범선소형포';
        case 'cl':
          return '경순포';
        case 'ca':
          return '중순포';
        case 'bb':
          return '전함포';
        // return value.nation !== 'MOT' ? '전함포' : '범선대형포';
        case 'cb':
          return '대순포';
      }
    } else if (value.domain === 'torpedo') {
      switch (value.class) {
        case 'surface':
          return '수면어뢰';
        case 'submarine':
          return '잠수어뢰';
        case 'missile':
          return '미사일';
      }
    } else if (value.domain === 'antiair') {
      switch (value.class) {
        case 'normal':
          return '일반';
        case 'fuse':
          return '시한신관';
      }
    } else if (value.domain === 'aircraft') {
      switch (value.class) {
        case 'fighter':
          return '전투기';
        case 'bomber':
          return '폭격기';
        case 'seaplane':
          return '수상기';
        case 'torpedo-bomber':
          return '뇌격기';
      }
    } else if (value.domain === 'accessory') {
      switch (value.class) {
        case 'backline':
          return '주력(후열)';
        case 'frontline':
          return '선봉(전열)';
        case 'signiture':
          return '특수';
      }
    } else if (value.domain === 'special') {
      switch (value.class) {
        case 'dd':
          return '구축';
        case 'cl':
          return '경순';
        case 'ca&cb':
          return '중순&대순';
        case 'bb':
          return '전함';
        case 'ac':
          return '항모';
        case 'ss':
          return '잠수';
        case 'signiture':
          return '전용';
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
      'gun',
      'torpedo',
      'antiair',
      'aircraft',
      'accessory',
      // 'special',
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
