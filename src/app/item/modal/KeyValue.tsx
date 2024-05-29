import { ReactNode } from 'react'
import styled from 'styled-components'

const Container = styled.div.attrs({
  className: 'keyvalue-container',
})`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
`

const Box = styled.div.attrs({
  className: 'keyvalue-box',
})`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 0.0625rem solid var(--border);
  border-radius: 0.25rem;
`

const Span = styled.div.attrs({
  className: 'keyvalue-span',
})`
  &[data-type='key'] {
    color: var(--font-weak);
    font-size: 1rem;
  }
  &[data-type='value'] {
    color: var(--font-strong);
    font-size: 1.125rem;
    text-align: center;
    display: inline-flex;
    align-items: center;
    height: 100%;
  }
`

export default function KeyValue({
  label,
  value,
  className,
}: {
  label?: string
  value?: ReactNode
  className?: string
}) {
  return (
    <Container className={className}>
      {/* {icon && <IconBox>{icon}</IconBox>} */}
      <Box>
        <Span data-type='key'>{label}</Span>
        <Span data-type='value'>{value}</Span>
      </Box>
    </Container>
  )
}
