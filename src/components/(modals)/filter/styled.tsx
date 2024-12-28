import buttonStyle from '@parakeet/ui/button.style.ts'
import { modalContainer } from '@parakeet/ui/modal.style.ts'
import styled from 'styled-components'

import IconClose from '@assets/icons/icon-close.tsx'

export const ModalContainer = styled.section`
  ${modalContainer};
  --modal-bc: var(--surface);
  --modal-shadow: 8px 12px 32px 0 rgba(0, 0, 51, 0.16);

  position: relative;
  display: flex;
  flex-direction: column;
  //gap: 16px;

  width: 100%;
  max-width: 640px;
  padding: 0;
  border-radius: 8px;
  height: fit-content;
  max-height: calc(100vh - 160px);

  //@media (max-width: 480px) {
  //  padding: 16px;
  //}
`

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--scroll);
    -webkit-border-radius: 4px;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  padding: 32px;
  @media (max-width: 480px) {
    padding: 16px;
  }
`

export const ModalClose = styled.button.attrs({
  'aria-label': 'Close',
  children: <IconClose />,
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;

  position: absolute;
  top: 0;
  right: 0;
`

export const ModalSection = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const SectionHeader = styled.header.attrs({
  className: 's2 fwb fcs',
})``

export const FilterList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-auto-rows: 40px;
  gap: 12px;
`

export const FilterItem = styled.button.attrs({
  as: 'li',
  className: 'fwm',
})`
  ${buttonStyle};
  --button-lc: var(--lc-w);
  --button-fc: var(--link);

  border-width: 1px;
  border-style: solid;
  border-radius: 12px;

  &:hover {
    --button-lc: var(--link-lc);
  }
  &[data-active='true'] {
    --button-lc: var(--link-lc);
    --button-bc: var(--link-bc);
  }
`
