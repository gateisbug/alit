import styled from 'styled-components'

// noinspection CssUnusedSymbol
const AppBar = styled.header`
  display: flex;
  box-sizing: border-box;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.5rem 1rem; /* 8 16 */
  backdrop-filter: blur(0.25rem); /* 4 */
  border-style: solid;
  border-color: var(--border-weak);
  border-width: 0 0 thin;
  align-items: center;
  justify-content: space-between;
  background-color: var(--main);

  & > .contents-box {
    display: flex;
    flex-flow: row nowrap;
    gap: 0.5rem; /* 8 */
  }
`

export default AppBar
