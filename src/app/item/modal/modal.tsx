'use client'

import { ModalBody } from '@components/common'
import { Modal, ScrollView } from '@ui'

interface Props {
  selectData?: ItemInterface
  clickAway?: () => void
}

export default function ItemModal(props: Props) {
  const { selectData, clickAway } = props

  return (
    <Modal open={selectData !== undefined} onClickAway={clickAway}>
      <ModalBody>
        <ScrollView>hello</ScrollView>
      </ModalBody>
    </Modal>
  )
}
