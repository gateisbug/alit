import { useEffect, useId } from 'react'

import { IconSearch } from '@assets/icons'
import Modal from '@components/@search-modal/modal.ts'
import {
  CategoryBox,
  CatrgoryItem,
  ModalBody,
  ModalHeader,
  ModalSearchForm,
  SearchScreen,
  Shortcut,
} from '@components/@search-modal/styled.ts'

interface Props {
  open?: boolean
  onClose: () => void
}

const CATEGORY = Object.freeze([
  {
    label: '전체',
    items: [
      {
        label: '전체 아이템',
        link: '/item',
      },
    ],
  },
  {
    label: '함포',
    items: [
      {
        label: '전체',
        link: '/item?category=gun',
      },
      {
        label: '구축포(부포)',
        link: '/item?category=gun&division=dd',
      },
      {
        label: '경순포(부포)',
        link: '/item?category=gun&division=cl',
      },
      {
        label: '중순포',
        link: '/item?category=gun&division=ca',
      },
      {
        label: '전함포',
        link: '/item?category=gun&division=bb',
      },
      {
        label: '대순포',
        link: '/item?category=gun&division=cb',
      },
    ],
  },
  {
    label: '항공기',
    items: [
      {
        label: '전체',
        link: '/item?category=aircraft',
      },
      {
        label: '전투기',
        link: '/item?category=aircraft&division=fighter',
      },
      {
        label: '폭격기',
        link: '/item?category=aircraft&division=bomber',
      },
      {
        label: '뇌격기',
        link: '/item?category=aircraft&division=torpedo-bomber',
      },
      {
        label: '수상기',
        link: '/item?category=aircraft&division=seaplane',
      },
    ],
  },
  {
    label: '어뢰',
    items: [
      {
        label: '전체',
        link: '/item?category=torpedo',
      },
      {
        label: '수면어뢰',
        link: '/item?category=torpedo&division=surface',
      },
      {
        label: '잠수어뢰',
        link: '/item?category=torpedo&division=submarine',
      },
      {
        label: '미사일',
        link: '/item?category=torpedo&division=missile',
      },
    ],
  },
  {
    label: '대공포',
    items: [
      {
        label: '전체',
        link: '/item?category=antiair',
      },
      {
        label: '일반',
        link: '/item?category=antiair&division=normal',
      },
      {
        label: '시한신관',
        link: '/item?category=antiair&division=fuse',
      },
    ],
  },
  {
    label: '설비',
    items: [
      {
        label: '전체',
        link: '/item?category=accessory',
      },
      {
        label: '전열',
        link: '/item?category=accessory&division=frontline',
      },
      {
        label: '후열',
        link: '/item?category=accessory&division=backline',
      },
      {
        label: '특수',
        link: '/item?category=accessory&division=signiture',
      },
    ],
  },
  {
    label: '특수',
    items: [
      {
        label: '공용',
        link: '/item?category=special',
      },
    ],
  },
])

export default function SearchModal({ open, onClose }: Props) {
  const id = useId()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
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
      <Modal.Container className='flex column'>
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
              autoFocus
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

          <Shortcut onClick={onClose}>esc</Shortcut>
        </ModalHeader>

        <ModalBody className='ov-a bb'>
          <SearchScreen>
            {CATEGORY.map((v) => (
              <CategoryBox key={v.label}>
                <h3 className='b2 fwm bb'>{v.label}</h3>
                {v.items.map((u) => (
                  <CatrgoryItem key={u.label} to={u.link}>
                    {u.label}
                  </CatrgoryItem>
                ))}
              </CategoryBox>
            ))}
          </SearchScreen>
        </ModalBody>
      </Modal.Container>
    </Modal>
  )
}
