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
  padding: 0.5rem 1rem;
  backdrop-filter: blur(4px);
  border-style: solid;
  border-color: var(--border-weak);
  border-width: 0 0 thin;
  align-items: center;
  justify-content: space-between;
  background-color: var(--main);
  //height: 4rem;

  & > .contents-box {
    display: flex;
    flex-flow: row nowrap;
    gap: 0.5rem;
  }
`

export default AppBar
