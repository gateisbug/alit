import Image from 'next/image';

import { CloseButton, ModalBody } from '@app/(main)/search-sc';
import ModalUI from '@ui/Modal/Modal';

interface Props {
  open: boolean;
  closeHandler: () => void;
}

export default function Search({ open = false, closeHandler }:Props) {
  return (
    <ModalUI open={open} onClickAway={closeHandler}>
      <ModalBody>
        hello
        <CloseButton $variant='text' onClick={() => { closeHandler() }} >
          <Image width={24} height={24} src='/assets/close.svg' alt='닫기 버튼' />
        </CloseButton>
      </ModalBody>
    </ModalUI>
  )
}