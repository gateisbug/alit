import { useEffect, useId } from 'react'

import { IconSearch } from '@assets/icons'
import Modal from '@components/@search-modal/modal.ts'
import {
  ModalBody,
  ModalHeader,
  ModalSearchForm,
  Shortcut,
} from '@components/@search-modal/styled.ts'

interface Props {
  open?: boolean
  onClose?: () => void
}

export default function SearchModal({ open, onClose }: Props) {
  const id = useId()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        e.preventDefault()
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  // @TODO: Modal 구체화 해야함
  return (
    <Modal open={open} onClickAway={onClose}>
      <Modal.Container>
        <ModalHeader>
          <ModalSearchForm>
            <label htmlFor={id} className='flex ai-c jc-c'>
              <IconSearch />
            </label>
            <input
              id={id}
              autoComplete='off'
              autoCorrect='off'
              autoCapitalize='off'
              enterKeyHint='search'
              spellCheck='false'
              placeholder='검색: 장비명, 별명, 설명'
              type='search'
              maxLength={64}
              onChange={(e) => {
                console.log(e.target.value)
              }}
              className='b1 fwm fcs'
              tabIndex={0}
            />
          </ModalSearchForm>

          <Shortcut>esc</Shortcut>
        </ModalHeader>

        <ModalBody>Search Modal</ModalBody>
      </Modal.Container>
    </Modal>
  )
}
