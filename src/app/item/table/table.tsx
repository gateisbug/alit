import { COLUMNS } from '@app/item/table/columns'
import { Box, Cell, Container, Row } from '@datum/item'

interface Props {
  data: ItemInterface[]
}

export default function ItemTable({ data }: Props) {
  return (
    <Container>
      <Box className='table-header'>
        <Row>
          {COLUMNS.map((v) => (
            <Cell
              key={v.value}
              data-type='th'
              data-key={v.value}
              className='fzp fwb fcs'
            >
              {v.label}
            </Cell>
          ))}
        </Row>
      </Box>

      <Box className='table-body'>
        {data.map((item) => (
          <Row
            key={`${item.name}_${item.index}`}
            data-type='row'
            // onClick={() => {
            //   console.log(item)
            // }}
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
        ))}
      </Box>
    </Container>
  )
}
