import IconArcaLive from '@assets/icons/icon-arcalive.tsx'
import IconGithub from '@assets/icons/icon-github.tsx'
import { ActionLink } from '@components/@speed-dial/styled.ts'
import useExternLink from '@util/hooks/useExternLink.ts'

interface Props {
  state: boolean
}

export function GithubLink({ state }: Props) {
  const { github } = useExternLink()

  return (
    <ActionLink
      href={github.href}
      aria-label={github.label}
      title={github.label}
      data-active={state}
      style={{ transitionDelay: state ? '90ms' : '60ms' }}
    >
      <IconGithub />
    </ActionLink>
  )
}

export function ArcaLiveLink({ state }: Props) {
  const { arcaLive } = useExternLink()

  return (
    <ActionLink
      href={arcaLive.href}
      aria-label={arcaLive.label}
      title={arcaLive.label}
      data-active={state}
      style={{ transitionDelay: state ? '120ms' : '30ms' }}
    >
      <IconArcaLive />
    </ActionLink>
  )
}