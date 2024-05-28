import { Tooltip } from '@ui'
import styled from 'styled-components'

const Target = styled.span`
  text-decoration: underline;
`
const State = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: rgba(97, 97, 97, 0.92);
  border-radius: 0.25rem;
  z-index: 1;
`

export default function Aircraft({ value }: { value: string }) {
  const [string, damage, ap] = value.split('\\t')
  const [weapon, count] = string.split('*')

  const title = ap ? (
    <State>
      <div>대미지: {damage}</div>
      <div>관통: {ap.replace(/\//g, ' / ')}</div>
    </State>
  ) : (
    <State>대미지: {damage}</State>
  )

  return (
    <>
      <Tooltip title={title}>
        <Target>{weapon}</Target>
      </Tooltip>
      <>&nbsp;× {count}</>
    </>
  )
}
