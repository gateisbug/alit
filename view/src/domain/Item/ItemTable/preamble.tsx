import React from 'react';
import { Portrait } from '@components';
import { Box, Ellipsis } from '@domain/Item/ItemTable/styles';

export type ColumnType = {
  basis: string;
  minWidth: string;
  render?: (v: ItemInterface) => React.ReactNode;
} & OptionType<ItemInterfaceIndex, string>;

const stroker = (className?: string): StrokeType => {
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

const classDelimiter = (domain?: string, classes?: string) => {
  if (domain && classes) {
    if (domain === 'gun') {
      switch (classes) {
        case 'dd':
          return '구축함포';
        case 'cl':
          return '경순함포';
        case 'ca':
          return '중순함포';
        case 'bb':
          return '전함포';
        case 'cb':
          return '대순함포';
      }
    } else if (domain === 'torpedo') {
      switch (classes) {
        case 'surface':
          return '수면어뢰';
        case 'submarine':
          return '잠수어뢰';
        case 'missile':
          return '미사일';
      }
    } else if (domain === 'antiair') {
      switch (classes) {
        case 'normal':
          return '일반';
        case 'fuse':
          return '시한신관';
      }
    } else if (domain === 'aircraft') {
      switch (classes) {
        case 'fighter':
          return '전투기';
        case 'bomber':
          return '폭격기';
        case 'seaplane':
          return '수상기';
        case 'torpedo-bomber':
          return '뇌격기';
      }
    } else if (domain === 'accessory') {
      switch (classes) {
        case 'backline':
          return '후열';
        case 'frontline':
          return '전열';
        case 'signiture':
          return '전용';
      }
    } else if (domain === 'special') {
      switch (classes) {
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

const typeDelimiter = (domain?: string, type?: string) => {
  if (domain && type) {
    if (domain === 'gun') {
      switch (type) {
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
    } else if (domain === 'torpedo') {
      switch (type) {
        case 'passive':
          return '수동';
        case 'active':
          return '유도';
        // case 'missile':
        //   return '미사일';
      }
    }
    // else if (domain === 'antiair') {
    //   switch (type) {
    //     case 'normal':
    //       return '일반';
    //     case 'fuse':
    //       return '시한신관';
    //   }
    // }
    else if (domain === 'aircraft') {
      switch (type) {
        case 'normal':
          return '일반';
        case 'fa':
          return '다목적';
        case 'as':
          return '제공권';
        case 'straight':
          return '쫄용';
        case 'focus':
          return '보스용';
      }
    } else if (domain === 'accessory') {
      switch (type) {
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
    // else if (domain === 'special') {
    //   switch (type) {
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
        src={`images/items/${v.index}.png`}
        placeholder={`images/items/${v.index}_lqip.png`}
        stroke={stroker(v.type)}
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
    render: (v) => <Box>{v.obtain?.map((u) => <span key={u}>{u}</span>)}</Box>,
  },
  { value: 'nation', label: '국가', basis: '100px', minWidth: '60px' },
  {
    value: 'class',
    label: '구분',
    basis: '100px',
    minWidth: '60px',
    render: (v) => classDelimiter(v.domain, v.class),
  },
  {
    value: 'type',
    label: '종류',
    basis: '100px',
    minWidth: '60px',
    render: (v) => typeDelimiter(v.domain, v.type),
  },
  {
    value: 'explain',
    label: '설명',
    basis: '468px',
    minWidth: '200px',
    render: (v) => <Ellipsis>{v.explain?.join('. ')}</Ellipsis>,
  },
];

const get = async (url: string) => {
  const response = await fetch(url);
  return await response.json();
};

export const getJson = async (target: ItemURL): Promise<ItemInterface[]> => {
  if (target !== 'all') {
    return (await get(`/json/${target}.json`)) ?? [];
  } else {
    const url: ItemURL[] = [
      'gun',
      'torpedo',
      'antiair',
      'aircraft',
      'accessory',
      'special',
    ];
    const result: ItemInterface[] = [];
    for (let i = 0; i < url.length; i++) {
      const res: ItemInterface[] = (await get(`/json/${target}.json`)) ?? [];
      result.concat(res);
    }

    return result;
  }
};
