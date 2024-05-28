import { COLUMNS } from '@app/item/table/columns'
import { Box, Cell, Container, Row } from '@components/item'

interface Props {
  items: ItemInterface[]
  rowClickHandler: (item: ItemInterface) => void
}

export default function ItemTable(props: Props) {
  const { items, rowClickHandler } = props

  const renderTableHeader = () =>
    COLUMNS.map((v) => (
      <Cell
        key={v.value}
        data-type='th'
        data-key={v.value}
        className='fzp fwb fcs'
      >
        {v.label}
      </Cell>
    ))

  const renderTableRow = () =>
    items.map((item) => (
      <Row
        key={`${item.name}_${item.index}`}
        data-type='row'
        onClick={() => {
          rowClickHandler(item)
        }}
      >
        {COLUMNS.map((v) => (
          <Cell
            key={`${v.label}_${item.index}_${v.value}`}
            data-type='td'
            data-key={v.value}
            className='fzp fwr fc'
          >
            {v.render ? v.render(item) : item[v.value]}
          </Cell>
        ))}
      </Row>
    ))

  return (
    <Container>
      <Box className='table-header'>
        <Row>{renderTableHeader()}</Row>
      </Box>

      <Box className='table-body'>{renderTableRow()}</Box>
    </Container>
  )
}
