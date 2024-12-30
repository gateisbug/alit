import { useLocation } from 'react-router-dom'

import IconShip from '@assets/icons/icon-ship.tsx'
import IconTool from '@assets/icons/icon-tool.tsx'
import { LinkButton } from '@components/@global-header/(buttons).ts'

export default function Conversion() {
  const { pathname } = useLocation()

  const to = pathname.includes('item') ? '/character' : '/item'
  const label = pathname.includes('item')
    ? '함순이 리스트로 이동'
    : '장비 설명회로 이동'

  const children = pathname.includes('item') ? <IconShip /> : <IconTool />

  return (
    <LinkButton to={to} aria-label={label} title={label}>
      {children}
    </LinkButton>
  )
}
