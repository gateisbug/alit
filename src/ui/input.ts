import styled from 'styled-components'

export const UITextArea = styled.textarea`
  font-family: inherit;

  display: block;
  box-sizing: border-box;
  background-color: transparent;
  color: var(--gray-900);
  border: 1px solid var(--gray-400);
  padding: 8px 12px;
  resize: none;
  overflow-y: auto;
  border-radius: 4px;

  &::placeholder,
  &:disabled,
  &:disabled:read-only {
    color: var(--gray-500);
  }
  &:disabled {
    background-color: var(--gray-100);
  }
  &:read-only {
    background-color: var(--gray-50);
  }

  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--gray-300);
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`

export const UIInput = styled.input`
  font-family: inherit;

  padding: 12px;
  border-radius: 4px;
  border: 1px solid var(--gray-300);

  &::placeholder {
    font-family: Pretendard, Inter, system-ui, Avenir, Helvetica, Arial,
      sans-serif;
    color: var(--gray-500);
  }

  &:disabled {
    color: var(--gray-500);
  }
  &:read-only {
    border-color: var(--gray-400);
    background-color: var(--gray-50);
  }

  scrollbar-width: thin;
  textarea::-webkit-scrollbar {
    width: 2px;
  }
  textarea::-webkit-scrollbar-thumb {
    background-color: var(--gray-300); /* 스크롤바의 색상 */
  }
  textarea::-webkit-scrollbar-track {
    background-color: transparent; /* 트랙의 색상 */
  }
`

export const UIInputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid var(--gray-300);

  & ${UIInput} {
    padding: 0;
    border-radius: unset;
    border: none;
    flex-grow: 1;
  }
`
