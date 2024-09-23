import { useEffect, useId, useState } from 'react'

import CATEGORY from '@app/@search-modal/(const).ts'
import { IconSearch } from '@assets/icons'
import Modal from '@components/@search-modal/modal.ts'
import {
  CategoryBox,
  CatrgoryItem,
  ModalBody,
  ModalHeader,
  ModalSearchForm,
  SearchResult,
  SearchScreen,
  Shortcut,
} from '@components/@search-modal/styled.ts'

interface Props {
  open?: boolean
  onClose: () => void
}

export default function SearchModal({ open, onClose }: Props) {
  const id = useId()
  const [search, setSearch] = useState('')

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

  useEffect(() => {
    if (open) {
      const input = document.getElementById(id)
      if (input) input.focus()
    }
  }, [id, open])

  // const renderResult = useCallback(() => {
  //   const finder = data?.filter(
  //     (v) =>
  //       v.nickname?.includes(search) ||
  //       v.explain?.includes(search) ||
  //       v.name?.includes(search),
  //   )
  //
  //   return <div>hello</div>
  //   // return search.length > 0 ? (
  //   //   finder.map((item) => (
  //   //     <ResultItem key={item?.index}>
  //   //       <Portrait path={`images/items/${item?.image}_x48.webp`} size={36} />
  //   //       Hello
  //   //     </ResultItem>
  //   //   ))
  //   // ) : (
  //   //   <div>nil</div>
  //   // )
  // }, [data, search])

  // @TODO: Modal 구체화 해야함
  return (
    <Modal open={open} onClickAway={onClose}>
      <Modal.Container className='flex column'>
        <ModalHeader>
          <ModalSearchForm>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
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
                setSearch(e.target.value)
              }}
              className='b1 fwm fcs'
              tabIndex={0}
            />
          </ModalSearchForm>
          <Shortcut onClick={onClose}>esc</Shortcut>
        </ModalHeader>

        <ModalBody className='ov-a bb'>
          <SearchResult className={search.length > 0 ? 'flex' : 'none'}>
            {/* {renderResult()} */}
          </SearchResult>

          <SearchScreen className={search.length > 0 ? 'none' : 'grid'}>
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
