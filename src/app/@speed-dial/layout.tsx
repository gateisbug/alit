import { useState } from 'react'

import {
  ArcaLiveLink,
  GithubLink,
} from '@app/@speed-dial/(buttons)/externLink.tsx'
import Filter from '@app/@speed-dial/(buttons)/filter.tsx'
import Noti from '@app/@speed-dial/(buttons)/noti.tsx'
import IconAdd from '@assets/icons/icon-add.tsx'
import {
  SpeedDialActions,
  SpeedDialButton,
  SpeedDialRoot,
} from '@components/@speed-dial/styled.ts'

export default function Layout() {
  const [state, setState] = useState(false)

  return (
    <SpeedDialRoot
      onMouseEnter={() => {
        setState(true)
      }}
      onMouseLeave={() => {
        setState(false)
      }}
    >
      <SpeedDialButton
        aria-label='접근 가능한 메뉴 보기'
        data-active={state}
        onClick={() => {
          setState(!state)
        }}
      >
        <IconAdd />
      </SpeedDialButton>

      <SpeedDialActions data-active={state}>
        <Filter state={state} />
        <Noti state={state} />
        <GithubLink state={state} />
        <ArcaLiveLink state={state} />
      </SpeedDialActions>
    </SpeedDialRoot>
  )
}
