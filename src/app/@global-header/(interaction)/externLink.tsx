import IconArcaLive from '@assets/icons/icon-arcalive.tsx'
import IconGithub from '@assets/icons/icon-github.tsx'
import { ExternLinkButton } from '@components/@global-header/(buttons).ts'
import useExternLink from '@util/hooks/useExternLink.ts'

export function GithubLink() {
  const { github } = useExternLink()

  return (
    <ExternLinkButton
      href={github.href}
      aria-label={github.label}
      title={github.label}
    >
      <IconGithub />
    </ExternLinkButton>
  )
}

export function ArcaLiveLink() {
  const { arcaLive } = useExternLink()

  return (
    <ExternLinkButton
      href={arcaLive.href}
      aria-label={arcaLive.label}
      title={arcaLive.label}
    >
      <IconArcaLive />
    </ExternLinkButton>
  )
}
