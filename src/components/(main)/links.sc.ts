import styled from 'styled-components'

export const LinkShortcut = styled.div.attrs({
  role: 'button',
})`
  display: block;
  align-self: center;
  margin-left: 0.25rem; /* 4 */
  padding: 0 0.25rem; /* 0 4 */
  border-radius: 0.375rem; /* 6 */
  line-height: 1.25rem; /* 20 */
  font-size: 0.75rem; /* 12 */
  font-weight: 700;
  width: 2.25rem; /* 36 */

  background-color: var(--shortcut-surface);
  border: 0.0625rem solid var(--shortcut-line); /* 1 */
  color: var(--shortcut-color);
`

// noinspection CssUnusedSymbol
export const LinkBox = styled.div`
  & > a,
  & > button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    text-align: center;
    flex: 0 0 auto;
    font-size: 1.5rem; /* 24 */
    overflow: visible;
    transition:
      background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    padding: 0.375rem; /* 6 */
    border: 0.0625rem solid #ffffff14; /* 1 */
    border-radius: 0.75rem; /* 12 */
    color: var(--primary);
    font-family: inherit;

    &:hover {
      border-color: #ffffff3a;
      background-color: #ffffff14;
    }

    & > .search-text {
      margin-left: 0.5rem; /* 8 */
      margin-right: 0.25rem; /* 4 */
    }
  }

  & > button {
    padding: 0.3125rem 0.375rem; /* 5 6 */

    & .search-text {
      width: 3rem; /* 48 */
    }

    /* @device: Tablet */
    @media (max-width: 768px) {
      ${LinkShortcut}, .search-text {
        display: none;
      }
    }
  }
`
