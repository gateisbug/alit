'use client'

import debounce from 'lodash-es/debounce'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { px, TabsProps, THEME } from './preamble'

const TabContainer = styled.div.attrs({
  className: px('container'),
})`
  display: block;
  position: relative;
`

const TabBar = styled.div.attrs({
  className: px('bar'),
})`
  position: absolute;
  width: 0;
  height: 0.125rem;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.primary};
  transition:
    left 250ms ease-in-out,
    width 250ms ease-in-out;
`
TabBar.defaultProps = {
  theme: THEME,
}

const TabBox = styled.div.attrs({
  className: px('box'),
})`
  display: flex;
  flex-flow: row nowrap;
  overflow-x: auto;
  gap: 0.75rem;
  padding: 0.125rem;
`

const Tab = styled.div.attrs({
  className: px('tab'),
})`
  display: inline-block;
  //padding: 0.5rem 0.75rem;
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
`

function TabsComponent({ item, defaultValue }: TabsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState<string>(defaultValue ?? item[0].label)

  const onClickTab = useCallback((v: string) => {
    setCurrent(v)
  }, [])

  const calculateBarWidth = useCallback(() => {
    const active = containerRef?.current?.querySelector(
      'div[data-active="true"]',
    )
    if (!containerRef.current || !active || !barRef.current) return

    const contRect = containerRef.current.getBoundingClientRect()
    const rect = active.getBoundingClientRect()

    barRef.current.style.left = `${rect.left - contRect.left}px`
    barRef.current.style.width = `${rect.width}px`
  }, [])

  useLayoutEffect(() => {
    calculateBarWidth()
  }, [calculateBarWidth])

  useLayoutEffect(() => {
    const debouncedHandler = debounce(calculateBarWidth, 200)
    window.addEventListener('resize', debouncedHandler)
    return () => {
      window.removeEventListener('resize', debouncedHandler)
    }
  }, [calculateBarWidth])

  return (
    <TabContainer ref={containerRef}>
      <TabBox>
        {item.map((v) => (
          <Tab
            key={`tab-root-${v.label}`}
            data-active={current === v.label}
            onClick={() => {
              onClickTab(v.label)
            }}
            className='fwr fzp'
          >
            {v.render ?? v.label}
          </Tab>
        ))}
      </TabBox>
      <TabBar ref={barRef} />
    </TabContainer>
  )
}

const Tabs = Object.assign(TabsComponent, {
  Container: TabContainer,
  Bar: TabBar,
  Box: TabBox,
  Root: Tab,
})

export default Tabs
