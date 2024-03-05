import React from 'react';
import { Portrait } from '@components';
import { CellBox, Ellipsis } from '@domain/Item/ItemTable/styled';
import { get } from '@util/fetching';
import { VALUE } from '@domain/Item/const';
import {
  classSorter,
  obtainSplit,
  strokeSorter,
  typeSorter,
} from '@domain/Item/funcs';

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
    render: (v) => (
      <Portrait
        src={`images/items/${v.image}.png`}
        placeholder={`images/items/${v.image}_lqip.png`}
        stroke={strokeSorter(v.type, v.domain)}
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
      // <CellBox>{v.obtain?.map((u) => <span key={u}>{u}</span>)}</CellBox>
      <CellBox>
        {obtainSplit(v)?.map((u, i, a) =>
          a.length > 2 && u.includes('메인') ? null : <span key={i}>{u}</span>,
        )}
      </CellBox>
    ),
  },
  { value: 'nation', label: '국가', basis: '100px', minWidth: '60px' },
  {
    value: 'class',
    label: '구분',
    basis: '100px',
    minWidth: '60px',
    render: (v) => classSorter(v),
  },
  {
    value: 'type',
    label: '종류',
    basis: '100px',
    minWidth: '60px',
    render: (v) => typeSorter(v),
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
