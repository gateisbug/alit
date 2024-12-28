import IconBell from '@assets/icons/icon-bell.tsx'
import { ActionButton } from '@components/@speed-dial/styled.ts'
import useNotification from '@util/hooks/useNotification.tsx'

interface Props {
  state: boolean
}

export default function Noti({ state }: Props) {
  const { handlerNotiButton, label: notiLabel } = useNotification()

  return (
    <ActionButton
      onClick={handlerNotiButton}
      title={notiLabel}
      aria-label={notiLabel}
      data-active={state}
      style={{ transitionDelay: state ? '60ms' : '90ms' }}
    >
      <IconBell />
    </ActionButton>
  )
}
