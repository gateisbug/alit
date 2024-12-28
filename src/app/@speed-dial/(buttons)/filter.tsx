import IconFilter from '@assets/icons/icon-filter.tsx'
import { ActionButton } from '@components/@speed-dial/styled.ts'
import useFilter from '@util/hooks/useFilter.tsx'

interface Props {
  state: boolean
}

export default function Filter({ state }: Props) {
  const { handlerFilterButton, label } = useFilter()

  return (
    <ActionButton
      onClick={handlerFilterButton}
      aria-label={label}
      title={label}
      data-active={state}
      style={{ transitionDelay: state ? '30ms' : '120ms' }}
    >
      <IconFilter />
    </ActionButton>
  )
}
