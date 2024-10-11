import IconSearch from '@assets/icons/icon-search.tsx'
// import { Modal } from '@components/(common)/modal/index.ts'
import {
  CategoryBox,
  CatrgoryItem,
  ModalBody,
  ModalHeader,
  ModalSearchForm,
  SearchResult,
  SearchScreen,
  Shortcut,
  ModalContainer,
} from '@components/(modals)/search/styled.ts'
import { useModalStore } from '@components/(modals)/useModalStore.tsx'

import useSearchModal from './useSearchModal.tsx'
import { SEARCHMODALKEY } from '../(modal-keys).ts'
import CATEGORY from './(const).ts'

export default function SearchModal() {
  const { modalClose } = useModalStore()
  const { id, onChangeInput, search, renderResult } = useSearchModal()

  const closeHandler = () => {
    modalClose(SEARCHMODALKEY)
  }

  return (
    <ModalContainer>
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
              onChangeInput(e.target.value)
            }}
            className='b1 fwm fcs'
            tabIndex={0}
          />
        </ModalSearchForm>
        <Shortcut onClick={closeHandler}>esc</Shortcut>
      </ModalHeader>

      <ModalBody className='ov-a bb'>
        <SearchResult className={search.length > 0 ? 'flex' : 'none'}>
          {renderResult()}
        </SearchResult>

        <SearchScreen className={search.length > 0 ? 'none' : 'grid'}>
          {CATEGORY.map((v) => (
            <CategoryBox key={v.label}>
              <h3 className='b2 fwm bb'>{v.label}</h3>
              {v.items.map((u) => (
                <CatrgoryItem key={u.label} to={u.link} onClick={closeHandler}>
                  {u.label}
                </CatrgoryItem>
              ))}
            </CategoryBox>
          ))}
        </SearchScreen>
      </ModalBody>
    </ModalContainer>
  )
}
