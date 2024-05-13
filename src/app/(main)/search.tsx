import Link from 'next/link';

import { ModalBody, SearchScreen } from '@app/(main)/search-sc';
import { Modal as ModalUI, ScrollView } from '@ui';

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

        <ScrollView>
          <SearchScreen>
            <div className='category'>
              <div className='category-title'>All</div>
              <Link href='/item' className='search-item'>
                All Items
              </Link>
            </div>
            <div className='category'>
              <div className='category-title'>Naval Gun</div>
              <Link href='/item/gun' className='search-item'>
                All Guns
              </Link>
              <Link href='/item/gun?filter=dd' className='search-item'>
                Destroyer
              </Link>
              <Link href='/item/gun?filter=cl' className='search-item'>
                Light Cruiser
              </Link>
              <Link href='/item/gun?filter=ca' className='search-item'>
                Heavy Cruiser
              </Link>
              <Link href='/item/gun?filter=bb' className='search-item'>
                Battle Ship
              </Link>
              <Link href='/item/gun?filter=cb' className='search-item'>
                Large Cruiser
              </Link>
            </div>
            <div className='category'>
              <div className='category-title'>Aircraft</div>
              <Link href='/item/aircraft' className='search-item'>
                All Airplanes
              </Link>
              <Link href='/item/aircraft?filter=ff' className='search-item'>
                Fighter
              </Link>
              <Link href='/item/aircraft?filter=db' className='search-item'>
                Dive Bomber
              </Link>
              <Link href='/item/aircraft?filter=tb' className='search-item'>
                Torpedo Bomber
              </Link>
              <Link href='/item/aircraft?filter=sp' className='search-item'>
                Seaplane
              </Link>
            </div>
            <div className='category'>
              <div className='category-title'>Torpedo</div>
              <Link href='/item/torpedo' className='search-item'>
                All Torpedoes
              </Link>
              <Link href='/item/torpedo?filter=sf' className='search-item'>
                Surface Torpedo
              </Link>
              <Link href='/item/torpedo?filter=ss' className='search-item'>
                Submarine`s Torpedo
              </Link>
              <Link href='/item/torpedo?filter=gg' className='search-item'>
                Missiles
              </Link>
            </div>
            <div className='category'>
              <div className='category-title'>Anti Air</div>
              <Link href='/item/antiair' className='search-item'>
                All AA Guns
              </Link>
              <Link href='/item/antiair?filter=no' className='search-item'>
                Normal
              </Link>
              <Link href='/item/antiair?filter=fu' className='search-item'>
                Fuse
              </Link>
            </div>
            <div className='category'>
              <div className='category-title'>Anti Air</div>
              <Link href='/item/torpedo' className='search-item'>
                All Anti-Air Guns
              </Link>
              <Link href='/item/torpedo?filter=surface' className='search-item'>
                Normal Gun
              </Link>
              <Link href='/item/torpedo?filter=submarine' className='search-item'>
                Fuse
              </Link>
            </div>
            <div className='category'>
              <div className='category-title'>Anti Air</div>
              <Link href='/item/torpedo' className='search-item'>
                All Anti-Air Guns
              </Link>
              <Link href='/item/torpedo?filter=surface' className='search-item'>
                Normal Gun
              </Link>
              <Link href='/item/torpedo?filter=submarine' className='search-item'>
                Fuse
              </Link>
            </div>
          </SearchScreen>
        </ScrollView>

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