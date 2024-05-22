import { ModalHeader as Container } from '@components/item'

export default function ModalHeader({ item }: { item?: ItemInterface }) {
  return (
    <Container>
      <span>{item?.image}</span>
      <span>{item?.tier}</span>

      <span>{item?.name}</span>
      <span>{item?.nickname}</span>

      <span>{item?.domain}</span>
      <span>{item?.class}</span>
      <span>{item?.type}</span>
    </Container>
  )
}
