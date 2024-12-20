import IconFilter from '@assets/icons/icon-filter.tsx'
import { BadgeButton } from '@components/@global-header/(buttons).ts'

// TODO: 필터 모달 추가시 연결해야함

export default function Filter() {
  return (
    <BadgeButton aria-label='필터링 모달 표시' title='필터링 모달 표시'>
      <IconFilter />
    </BadgeButton>
  )
}
