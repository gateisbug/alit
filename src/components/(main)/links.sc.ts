import styled from 'styled-components'

export const LinkShortcut = styled.div.attrs({
  role: 'button',
})`
  display: block;
  align-self: center;
  margin-left: 4px;
  padding: 0 4px;
  border-radius: 6px;
  line-height: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  width: 36px;

  background-color: var(--shortcut-surface);
  border: 1px solid var(--shortcut-line);
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
    font-size: 1.5rem;
    overflow: visible;
    transition:
      background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    padding: 0.375rem;
    border: 1px solid var(--border-weak);
    border-radius: 0.75rem;
    color: var(--primary);
    font-family: inherit;

    &:hover {
      border-color: var(--border);
      background-color: var(--border-weak);
    }

    & > .search-text {
      margin-left: 8px;
      margin-right: 4px;
    }
  }

  & > button {
    padding: 0.3125rem 0.375rem;

    & .search-text {
      width: 48px;
    }

    /* @device: Tablet */
    @media (max-width: 768px) {
      ${LinkShortcut}, .search-text {
        display: none;
      }
    }
  }
`
