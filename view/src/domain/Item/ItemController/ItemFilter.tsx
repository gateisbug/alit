import React from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Button, Check } from '@workspace/ui';
import { FilterIcon } from '@icon';
import { Dropdown } from '@components';
import { CATEGORIES, VALUE } from '@domain/Item/const';

const StyledButton = styled(Button)`
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  font-weight: 400;
  font-size: 1rem;
  font-family: Pretendard, Inter, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
`;

const FilterBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 14%);
  gap: 0.75rem;

  @media (prefers-color-scheme: light) {
    border: 1px solid rgba(0, 0, 0, 22.75%);
  }

  @media (prefers-color-scheme: dark) {
    border: 1px solid rgba(255, 255, 255, 22.75%);
  }
`;

const FilterList = styled.form`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  padding: 0.5rem 0;
`;

type ItemType = {
  value: string;
  label: string;
};

const ItemFilter = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const boxRef = React.useRef<HTMLDivElement>(null);

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
          return CATEGORIES.GUN;
        case category === VALUE.TORPEDO:
          return CATEGORIES.TORPEDO;
        case category === VALUE.ANTIAIR:
          return CATEGORIES.ANTIAIR;
        case category === VALUE.AIRCRAFT:
          return CATEGORIES.AIRCRAFT;
        case category === VALUE.ACCESSORY:
          return CATEGORIES.ACCESSORY;
        case category === VALUE.SPECIAL:
          return CATEGORIES.SPECIAL;
        default:
          return CATEGORIES.ALL;
      }
    }, 200),
    [category],
  );

  const onChangeCheck = React.useCallback(() => {
    const result = document.querySelectorAll(
      'input[type="checkbox"][name="category"]',
    );
    for (let i = 0; i < result.length; i++) {
      const now = result[i] as HTMLInputElement;
      console.log(now.value, now.checked);
    }
  }, []);

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
      >
        <FilterIcon />
        필터
      </StyledButton>
    </Dropdown>
  );
};

export default React.memo(ItemFilter);
