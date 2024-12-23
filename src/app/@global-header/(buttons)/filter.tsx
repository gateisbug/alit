import IconFilter from '@assets/icons/icon-filter.tsx'
import { ActionButton } from '@components/@global-header/(buttons).ts'
import useFilter from '@util/hooks/useFilter.tsx'

export default function Filter() {
  const { handlerFilterButton, label } = useFilter()

  return (
    <ActionButton
      onClick={handlerFilterButton}
      aria-label={label}
      title={label}
    >
      <IconFilter />
    </ActionButton>
  )
}
