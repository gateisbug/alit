import { SEARCHMODALKEY } from '@app/(modals)/(modal-keys).ts'
import CATEGORY from '@app/(modals)/@search-modal/(const).ts'
import useSearchModal from '@app/(modals)/@search-modal/useSearchModal.tsx'
import IconSearch from '@assets/icons/icon-search.tsx'
import { Modal, useModalStore } from '@components/(common)/modal/index.ts'
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
} from '@components/@search-modal/styled.ts'

export default function SearchModal() {
  const { drop } = useModalStore()
  const { id, onChangeInput, search, renderResult } = useSearchModal()

  const onClose = () => {
    drop(SEARCHMODALKEY)
  }

  return (
    <Modal id={SEARCHMODALKEY}>
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
          <Shortcut onClick={onClose}>esc</Shortcut>
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
                  <CatrgoryItem key={u.label} to={u.link} onClick={onClose}>
                    {u.label}
                  </CatrgoryItem>
                ))}
              </CategoryBox>
            ))}
          </SearchScreen>
        </ModalBody>
      </ModalContainer>
    </Modal>
  )
}
