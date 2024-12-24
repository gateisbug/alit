import IconArcaLive from '@assets/icons/icon-arcalive.tsx'
import IconGithub from '@assets/icons/icon-github.tsx'
import { LinkButton } from '@components/@global-header/(buttons).ts'
import useExternLink from '@util/hooks/useExternLink.ts'

export function GithubLink() {
  const { github } = useExternLink()

  return (
    <LinkButton
      href={github.href}
      aria-label={github.label}
      title={github.label}
    >
      <IconGithub />
    </LinkButton>
  )
}

export function ArcaLiveLink() {
  const { arcaLive } = useExternLink()

  return (
    <LinkButton
      href={arcaLive.href}
      aria-label={arcaLive.label}
      title={arcaLive.label}
    >
      <IconArcaLive />
    </LinkButton>
  )
}
