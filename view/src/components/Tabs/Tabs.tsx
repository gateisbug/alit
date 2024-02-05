import React, { useEffect } from 'react';
import styled from 'styled-components';

const TabContainer = styled.div`
  display: block;
  position: relative;
`;

const TabBar = styled.div`
  position: absolute;
  width: 0;
  height: 0.125rem;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.primary};
  transition:
    left 250ms ease-in-out,
    width 250ms ease-in-out;
`;
TabBar.defaultProps = {
  theme: {
    primary: 'var(--primary, #ffb74d)',
  },
};

const TabBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  overflow-x: auto;
  gap: 0.75rem;
  padding: 0.125rem;
`;

const Tab = styled.div`
  display: inline-block;
  padding: 0.5rem 0.75rem;
  font-weight: 400;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 1rem;
  transition:
    color 250ms ease-in-out,
    outline-color 250ms ease-in-out;

  &[data-active='true'] {
    color: var(--primary);
    font-weight: 500;
  }
  &[data-active='false']:hover {
    color: var(--primary);
  }
`;

type TabItemType = {
  label: string;
  render?: React.ReactNode;
};

interface TabsProps {
  item: TabItemType[];
}

const Tabs = ({ item }: TabsProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const barRef = React.useRef<HTMLDivElement>(null);
  const [current, setCurrent] = React.useState<string>(item[0].label);

  const onClickTab = React.useCallback((v: string) => {
    setCurrent(v);
  }, []);

  useEffect(() => {
    const active = containerRef?.current?.querySelector(
      'div[data-active="true"]',
    );
    if (!active || !barRef.current) return;

    const rect = active.getBoundingClientRect();
    barRef.current.style.left = rect.left + 'px';
    barRef.current.style.width = rect.width + 'px';
  }, [current]);

  return (
    <TabContainer ref={containerRef}>
      <TabBox>
        {item.map((v, i) => (
          <Tab
            key={`${v.label}_${i}`}
            data-active={current === v.label}
            onClick={() => {
              onClickTab(v.label);
            }}
          >
            {v.render ?? v.label}
          </Tab>
        ))}
      </TabBox>
      <TabBar ref={barRef} />
    </TabContainer>
  );
};

export default React.memo(Tabs);
