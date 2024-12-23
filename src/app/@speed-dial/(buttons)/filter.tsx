import IconFilter from '@assets/icons/icon-filter.tsx'
import { ActionButton } from '@components/@speed-dial/styled.ts'

// TODO: 필터 모달 추가시 연결해야함

interface Props {
  state: boolean
}

export default function Filter({ state }: Props) {
  return (
    <ActionButton
      aria-label='필터링 모달 표시'
      title='필터링 모달 표시'
      data-active={state}
      style={{ transitionDelay: state ? '30ms' : '120ms' }}
    >
      <IconFilter />
    </ActionButton>
  )
}
