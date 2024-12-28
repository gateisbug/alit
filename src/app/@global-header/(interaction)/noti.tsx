import IconBell from '@assets/icons/icon-bell.tsx'
import { Badge } from '@components/(common)/badge.ts'
import { BadgeButton } from '@components/@global-header/(buttons).ts'
import useNotification from '@util/hooks/useNotification.tsx'

export default function Notification() {
  const { notOpen, handlerNotiButton, label } = useNotification()

  return (
    <BadgeButton onClick={handlerNotiButton} title={label} aria-label={label}>
      <IconBell />
      <Badge data-show={notOpen} />
    </BadgeButton>
  )
}
