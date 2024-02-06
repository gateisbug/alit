import React from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Button, Check } from '@workspace/ui';
import { FilterIcon } from '@icon';
import { Dropdown } from '@components';

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

  const { pathname } = useLocation();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const pathCategory = React.useCallback(
    debounce((): ItemType[] => {
      if (pathname === '/item/gun') {
        return [
          { value: 'dd', label: '구축함포' },
          { value: 'cl', label: '경순함포' },
          { value: 'ca', label: '중순함포' },
          { value: 'bb', label: '전함포' },
          { value: 'cb', label: '대순함포' },
        ];
      } else if (pathname === '/item/torpedo') {
        return [
          { value: 'surface', label: '수면어뢰' },
          { value: 'submarine', label: '잠수어뢰' },
        ];
      } else if (pathname === '/item/antiair') {
        return [
          { value: 'normal', label: '일반' },
          { value: 'fuse', label: '시한신관' },
        ];
      } else if (pathname === '/item/aircraft') {
        return [
          { value: 'fighter', label: '전투기' },
          { value: 'bomber', label: '폭격기' },
          { value: 'seaplane', label: '수상기' },
          { value: 'torpedo-bomber', label: '뇌격기' },
        ];
      } else if (pathname === '/item/accessory') {
        return [
          { value: 'backline', label: '후열' },
          { value: 'frontline', label: '전열' },
          { value: 'signiture', label: '전용' },
        ];
      } else if (pathname === '/item/special') {
        return [
          { value: 'normal', label: '공용' },
          { value: 'signiture', label: '전용' },
        ];
      } else {
        return [];
      }
    }, 200),
    [pathname],
  );

  const renderContents = React.useCallback((): React.ReactNode => {
    if (pathname === '/item') {
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
              >
                {v.label}
              </Check>
            ))}
          </FilterList>
        </FilterBox>
      );
    }
  }, [pathname]);

  return (
    <Dropdown show={open} contents={renderContents()}>
      <StyledButton
        ref={containerRef}
        variant='text'
        onClick={() => {
          setOpen(!open);
        }}
        disabled={pathname === '/item'}
      >
        <FilterIcon />
        필터
      </StyledButton>
    </Dropdown>
  );
};

export default React.memo(ItemFilter);
