import { ReactNode } from 'react'
import styled from 'styled-components'

const Container = styled.div.attrs({
  className: 'keyvalue-container flex column ai-c',
})`
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid var(--lc);
  border-radius: 4px;
`

const Span = styled.div.attrs({
  className: 'keyvalue-span',
})`
  &[data-type='key'] {
    color: var(--fc-w);
    font-size: 16px;
  }
  &[data-type='value'] {
    color: var(--fc-s);
    font-size: 18px;
    text-align: center;
    display: inline-flex;
    align-items: center;
    height: 100%;
  }
`

interface Props {
  label?: string
  value?: ReactNode
  className?: string
}

export default function KeyValue({ label, value, className }: Props) {
  return (
    <Container className={className}>
      <Span data-type='key'>{label}</Span>
      <Span data-type='value'>{value}</Span>
    </Container>
  )
}
