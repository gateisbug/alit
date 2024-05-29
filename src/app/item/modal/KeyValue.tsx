import { ReactNode } from 'react'
import styled from 'styled-components'

const Container = styled.div.attrs({
  className: 'keyvalue-container',
})`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem; /* 16 */
`

const Box = styled.div.attrs({
  className: 'keyvalue-box',
})`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem; /* 8 */
  padding: 0.5rem 0.75rem; /* 8 12 */
  border: 0.0625rem solid var(--border); /* 1 */
  border-radius: 0.25rem; /* 4 */
`

const Span = styled.div.attrs({
  className: 'keyvalue-span',
})`
  &[data-type='key'] {
    color: var(--font-weak);
    font-size: 1rem; /* 16 */
  }
  &[data-type='value'] {
    color: var(--font-strong);
    font-size: 1.125rem; /* 18 */
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
