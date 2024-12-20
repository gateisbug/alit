import IconGithub from '@assets/icons/icon-github.tsx'
import { LinkButton } from '@components/@global-header/(buttons).ts'

export default function GithubLink() {
  return (
    <LinkButton
      href='https://github.com/gateisbug/alit'
      aria-label='깃허브 리드미 페이지로 이동'
      title='깃허브 리드미 페이지로 이동'
    >
      <IconGithub />
    </LinkButton>
  )
}
