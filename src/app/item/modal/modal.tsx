import Portrait from '@app/item/common/portrait'
import Breadcrumbs from '@app/item/modal/breadcrumbs'
import { ItemModalBody, ModalHeader } from '@components/item'
import { Modal, ScrollView } from '@ui'

interface Props {
  item?: ItemInterface
  clickAway?: () => void
}

export default function ItemModal(props: Props) {
  const { item, clickAway } = props

  return (
    <Modal open={item !== undefined} onClickAway={clickAway}>
      <ItemModalBody>
        <ScrollView>
          <ModalHeader>
            <Portrait
              item={item}
              size={72}
              style={{ width: '6rem', height: '6rem' }}
            />

            <div className='section'>
              <h2 className='fcs fzl'>{item?.name}</h2>
              <p className='fcw fzp'>{item?.nickname}</p>
              <Breadcrumbs item={item} />
            </div>
          </ModalHeader>
        </ScrollView>
      </ItemModalBody>
    </Modal>
  )
}
