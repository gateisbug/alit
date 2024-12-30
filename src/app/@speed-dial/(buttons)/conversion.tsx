import { useLocation } from 'react-router-dom'

import IconShip from '@assets/icons/icon-ship.tsx'
import IconTool from '@assets/icons/icon-tool.tsx'
import { ActionLink } from '@components/@speed-dial/styled.ts'

interface Props {
  state: boolean
}

export default function Conversion({ state }: Props) {
  const { pathname } = useLocation()

  const to = pathname.includes('item') ? '/character' : '/item'
  const label = pathname.includes('item')
    ? '함순이 리스트로 이동'
    : '장비 설명회로 이동'

  const children = pathname.includes('item') ? <IconShip /> : <IconTool />

  return (
    <ActionLink to={to} aria-label={label} title={label} data-active={state}>
      {children}
    </ActionLink>
  )
}
