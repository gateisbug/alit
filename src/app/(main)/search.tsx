import { ModalBody, SearchLinks } from '@/components/(main)';
import { Modal as ModalUI } from '@ui';

interface Props {
  open: boolean;
  closeHandler: () => void;
}

export default function Search({ open = false, closeHandler }:Props) {
  return (
    <ModalUI open={open} onClickAway={closeHandler}>
      <ModalBody>
        <div>input field</div>
        <div>search result</div>

        <SearchLinks />

        {/* <CloseButton */}
        {/*  $variant='text' */}
        {/*  onClick={() => { */}
        {/*    closeHandler() */}
        {/*  }} */}
        {/* > */}
        {/*  <Image */}
        {/*    width={24} */}
        {/*    height={24} */}
        {/*    src='/assets/close.svg' */}
        {/*    alt='닫기 버튼' */}
        {/*  /> */}
        {/* </CloseButton> */}
      </ModalBody>
    </ModalUI>
  )
}