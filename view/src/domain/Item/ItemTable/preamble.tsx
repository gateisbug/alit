import React from 'react';
import { Portrait } from '@components';
import { Box, Ellipsis } from '@domain/Item/ItemTable/styles';

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
          return '대순함포';
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

export type ColumnType = {
  basis: string;
  minWidth: string;
  render?: (v: ItemInterface) => React.ReactNode;
} & OptionType<ItemInterfaceIndex, string>;

export const COLUMNS: ColumnType[] = [
  {
    value: 'link',
    label: '아이콘',
    basis: '90px',
    minWidth: '64px',
    // render: (v) => <img src={v.link} width='64px' height='64px' alt={v.name} />,
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
    render: (v) => (
      <Box>{v.obtain?.split('|').map((u) => <span key={u}>{u}</span>)}</Box>
    ),
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
    render: (v) => <Ellipsis>{v.explain?.replace(/\|/g, '. ')}</Ellipsis>,
  },
];

export const EXAMPLE: ItemInterface[] = [
  {
    index: 11040,
    name: '76mm 단장포',
    tier: 'R',
    nickname: '76밀',
    link: 'https://azurlane.netojuu.com/images/e/eb/11000.png',
    nation: 'USS',
    explain:
      '전탄발사 원툴|포격딜을 포기하고 전탄발사 순환율을 높이는 템|1. 함선의 포격성능과 전탄성능의 차이가 심할 때 사용함|2. 함선의 포격속도가 스킬발동과 연관이 있을 때 사용함',
    obtain: '상자깡',
    domain: 'gun',
    class: 'dd',
    type: 'normal',
    status:
      '포격:+12|대미지:7*1|사속:0.67초|사거리:50|발사패턴:1*1|발사간격:0초|장비배율:130%|대갑비례:100 / 60 / 20',
  },
  {
    index: 11100,
    name: '127mm 단장포',
    tier: 'SR',
    nickname: '',
    link: 'https://azurlane.netojuu.com/images/c/cd/11100.png',
    nation: 'USS',
    explain:
      '1. 극초반 뉴비 미션으로 받을 수 있는 구축포|2. 표면 스펙은 양호해도 발사 스펙에 하자가 있으므로 오랫동안 사용할 템은 아니다',
    obtain: '상자깡',
    domain: 'gun',
    class: 'dd',
    type: 'he',
    status:
      '포격:+25|대미지:15*3|사속:1.06초|사거리:60|발사패턴:1*3|발사간격:0.3초|장비배율:130%|대갑비례:120 / 60 / 60',
  },
  {
    index: 90100,
    name: '138.6mm 단장포 Mle 1929',
    tier: 'SSR',
    nickname: '토끼포',
    link: 'https://azurlane.netojuu.com/images/b/bc/50100.png',
    nation: 'FFNF',
    explain:
      '1. 구축포 인플레가 진행되면서 단점이 점점 부각되어 애매해짐|2. 일단 갖고있으면 그럭저럭 굴리는 맛은 있음|3. 브레스트 스킬 발동용으로 가끔 채용함',
    obtain: '장비개발:엘랑|빛과 그림자의 아이리스:D-2',
    domain: 'gun',
    class: 'dd',
    type: 'he',
    status:
      '포격:+35|대미지:15*5|사속:1.6초|사거리:60|발사패턴:1*5|발사간격:0.2초|장비배율:130%|대갑비례:120 / 60 / 60',
  },
  {
    index: 22280,
    name: '시제형 4연장 152mm 주포',
    tier: 'UR',
    nickname: '플리머스포',
    link: 'https://azurlane.netojuu.com/images/3/37/22280.png',
    nation: 'HMS',
    explain:
      '기샹포가 금딱경순포 1위라면|얘는 모든경순포 1위|추가로, 누가 쓰든 1인분 이상을 함',
    obtain: '군부연구실:5기',
    domain: 'gun',
    class: 'cl',
    type: 'ap',
    status:
      '포격:+65|대미지:30*4|사속:3.1초|사거리:68|발사패턴:4*1|발사간격:0초|장비배율:130%|대갑비례:110 / 90 / 70',
  },
];
