import React from 'react';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { Dropdown } from '@components';
import { FilterIcon } from '@icon';
import { Button, Check } from '@workspace/ui';
import { debounce } from 'lodash';

import { filterStore } from '@domain/Item/store';

import { CLASSES, VALUE } from '../const';

const StyledButton = styled(Button).attrs({
  className: 'ui-itemfilter-button',
})`
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
`;

const FilterBox = styled.div.attrs({
  className: 'ui-itemfilter-box',
})`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 14%);
  background-color: var(--surface);
  gap: 0.75rem;

  @media (prefers-color-scheme: light) {
    border: 1px solid rgba(0, 0, 0, 22.75%);
  }

  @media (prefers-color-scheme: dark) {
    border: 1px solid rgba(255, 255, 255, 22.75%);
  }
`;

const FilterList = styled.form.attrs({
  className: 'ui-itemfilter-list',
})`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  padding: 0.5rem 0;
`;

type ItemType = OptionType<string, string>;

const ItemFilter = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const boxRef = React.useRef<HTMLDivElement>(null);
  const setItemTableData = useSetRecoilState(filterStore);

  // const { pathname } = useLocation();
  const category = useParams<{ category?: string }>().category ?? 'all';
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [category]);

  const pathCategory = React.useCallback(
    debounce((): ItemType[] => {
      switch (true) {
        case category === VALUE.GUN:
          return CLASSES.GUN;
        case category === VALUE.TORPEDO:
          return CLASSES.TORPEDO;
        case category === VALUE.ANTIAIR:
          return CLASSES.ANTIAIR;
        case category === VALUE.AIRCRAFT:
          return CLASSES.AIRCRAFT;
        case category === VALUE.ACCESSORY:
          return CLASSES.ACCESSORY;
        case category === VALUE.SPECIAL:
          return CLASSES.SPECIAL;
        default:
          return CLASSES.ALL;
      }
    }, 200),
    [category],
  );

  const onChangeCheck = React.useCallback(
    debounce(() => {
      const result = document.querySelectorAll(
        'input[type="checkbox"][name="category"]',
      );
      const res: string[] = [];
      for (let i = 0; i < result.length; i++) {
        const now = result[i] as HTMLInputElement;
        if (now.checked) res.push(now.value);
      }
      setItemTableData(res);
    }, 200),
    [],
  );

  const renderContents = React.useCallback((): React.ReactNode => {
    if (category === VALUE.ALL) {
      return null;
    } else {
      return (
        <FilterBox ref={boxRef}>
          <FilterList>
            {(pathCategory() ?? []).map((v) => (
              <Check
                key={v.value}
                name='category'
                value={v.value}
                defaultChecked
                onChange={onChangeCheck}
              >
                {v.label}
              </Check>
            ))}
          </FilterList>
        </FilterBox>
      );
    }
  }, [category]);

  return (
    <Dropdown show={open} contents={renderContents()}>
      <StyledButton
        ref={containerRef}
        variant='text'
        onClick={() => {
          setOpen(!open);
        }}
        disabled={category === VALUE.ALL}
        className='ff fzp fwr'
      >
        <FilterIcon />
        필터
      </StyledButton>
    </Dropdown>
  );
};

export default React.memo(ItemFilter);
