'use client'

import { ItemModalBody } from '@components/item'
import { Modal, ScrollView } from '@ui'

import ModalHeader from './modal-header'

interface Props {
  selectData?: ItemInterface
  clickAway?: () => void
}

export default function ItemModal(props: Props) {
  const { selectData, clickAway } = props

  return (
    <Modal open={selectData !== undefined} onClickAway={clickAway}>
      <ItemModalBody>
        <ScrollView>
          <ModalHeader item={selectData} />
        </ScrollView>
      </ItemModalBody>
    </Modal>
  )
}
