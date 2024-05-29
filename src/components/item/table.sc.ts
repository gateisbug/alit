// noinspection CssUnusedSymbol

import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  gap: 0.5rem;

  //margin-top: 2rem;
  //overflow-x: auto;
`

export const Box = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;

  &.table-body {
    border-bottom: 0.125rem solid transparent;

    @media (prefers-color-scheme: light) {
      border-color: rgba(0, 0, 0, 0.16);
    }
    @media (prefers-color-scheme: dark) {
      border-color: rgba(255, 255, 255, 0.16);
    }
  }
`

export const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${Box} > &[data-type='row'] {
    padding: 0.75rem 0;
    border-bottom: 0.0625rem solid transparent;
    cursor: pointer;
    min-width: fit-content;
    width: 100%;
    box-sizing: border-box;
    height: 5.5625rem; /* 89 */

    @media (prefers-color-scheme: light) {
      border-color: rgba(0, 0, 0, 0.08);
    }
    @media (prefers-color-scheme: dark) {
      border-color: rgba(255, 255, 255, 0.08);
    }

    &:last-of-type {
      border-bottom: none;
    }

    &:hover {
      @media (prefers-color-scheme: light) {
        background-color: rgba(0, 0, 0, 0.04);
      }
      @media (prefers-color-scheme: dark) {
        background-color: rgba(255, 255, 255, 0.04);
      }
    }
  }
`

export const Cell = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background-color: transparent;

  line-height: 1.5em;
  text-align: center;

  &[data-type='th'] {
    display: inline-block;
    width: 100%;
  }
  &[data-type='td'] {
    word-break: keep-all;

    &[data-key='explain'],
    &[data-key='obtain'] {
      justify-content: flex-start;
      text-align: start;
    }
  }

  &[data-key='link'] {
    flex-basis: 90px; /* fix */
    min-width: 64px; /* fix */
  }
  &[data-key='name'] {
    flex-basis: 240px; /* fix */
    min-width: 180px; /* fix */
  }
  &[data-key='nickname'] {
    flex-basis: 150px; /* fix */
    min-width: 100px; /* fix */
  }
  &[data-key='obtain'] {
    flex-basis: 240px; /* fix */
    min-width: 168px; /* fix */
  }
  &[data-key='nation'],
  &[data-key='type'],
  &[data-key='class'] {
    flex-basis: 100px; /* fix */
    min-width: 60px; /* fix */
  }
  &[data-key='explain'] {
    flex-basis: 468px; /* fix */
    min-width: 200px; /* fix */
  }

  @media (max-width: 1080px) {
    &[data-key='nation'],
    &[data-key='type'],
    &[data-key='class'] {
      display: none;
    }
  }
  @media (max-width: 860px) {
    &[data-key='obtain'] {
      display: none;
    }
  }
  @media (max-width: 660px) {
    &[data-key='explain'] {
      display: none;
    }
  }
  @media (max-width: 460px) {
    &[data-key='nickname'] {
      display: none;
    }
  }
  @media (max-width: 340px) {
    &[data-key='name'] {
      min-width: 100px; /* fix */
    }
  }
`

export const Wall = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`

export const Ellipsis = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`
