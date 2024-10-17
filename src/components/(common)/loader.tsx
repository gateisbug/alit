import { UILoaderBox, UILoaderRoot } from '@xui/loader.ts'
import styled from 'styled-components'

const LoaderBox = styled(UILoaderBox)`
  --loader-color: var(--primary);
`

const LoaderRoot = styled(UILoaderRoot).attrs({
  children: <circle cx='44' cy='44' r='20.2' fill='none' strokeWidth='3.6' />,
})``

export default function Loader() {
  return (
    <LoaderBox>
      <LoaderRoot viewBox='22 22 44 44' />
    </LoaderBox>
  )
}
