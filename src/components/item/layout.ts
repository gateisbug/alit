import styled from 'styled-components';

// noinspection CssUnresolvedCustomProperty
export const PortraitFrame = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  box-sizing: border-box;
  padding: 5px;
  border-width: 3px;
  border-style: solid;
  border-color: var(--portrait-lc);
  background-color: var(--portrait-bc);

  &[data-stroke='default'] {
    --portrait-lc: #7e5475;
  }
  &[data-stroke='red'] {
    --portrait-lc: #e4002b;
  }
  &[data-stroke='yellow'] {
    --portrait-lc: #f3e500;
  }
  &[data-stroke='blue'] {
    --portrait-lc: #0047bb;
  }
  &[data-stroke='violet'] {
    --portrait-lc: #ea27c2;
  }

  &[data-tier='N'] {
    --portrait-bc: #ddd;
  }
  &[data-tier='R'] {
    --portrait-bc: #9fe8ff;
  }
  &[data-tier='SR'] {
    --portrait-bc: #c4adff;
  }
  &[data-tier='SSR'] {
    --portrait-bc: #ee9;
  }
  &[data-tier='UR'] {
    --portrait-bc: transparent;
    background: linear-gradient(120deg, #fbffca, #baffbf, #a7efff, #ffabff);
  }
`