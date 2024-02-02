import React from 'react';
import styled from 'styled-components';

const TabContainer = styled.div`
  display: block;
  position: relative;
`;

const TabBar = styled.div`
  position: absolute;
  width: 0;
  height: 0.125rem;
  background-color: ${(props) => props.theme.primary};
`;
TabBar.defaultProps = {
  theme: {
    primary: 'var(--primary, #ffb74d)',
  },
};

const TabBox = styled.div``;

const Tab = styled.div``;

interface TabProps {
  item: string[];
}

const Tabs = ({ item }: TabProps) => {
  return (
    <TabContainer>
      <TabBox>
        {item.map((v, i) => (
          <Tab key={`${v}_${i}`}>{v}</Tab>
        ))}
      </TabBox>
      <TabBar />
    </TabContainer>
  );
};

export default React.memo(Tabs);
