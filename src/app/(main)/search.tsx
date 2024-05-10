import { ModalBody } from '@app/(main)/search-sc';
import ModalUI from '@ui/Modal/Modal';

interface Props {
  open?: boolean;
  closeHandler?: () => void;
}

export default function Search({ open = false, closeHandler }:Props) {
  return (
    <ModalUI open={open} onClickAway={closeHandler}>
      <ModalBody>hello</ModalBody>
    </ModalUI>
  )
}