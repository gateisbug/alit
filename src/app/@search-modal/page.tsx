import CATEGORY from '@app/@search-modal/(const).ts'
import useSearchModal from '@app/@search-modal/useSearchModal.tsx'
import IconSearch from '@assets/icons/icon-search.tsx'
import Modal from '@components/(common)/modal.tsx'
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

interface Props {
  open?: boolean
  onClose: () => void
}

export default function SearchModal({ open, onClose }: Props) {
  const { id, onChangeInput, search, renderResult } = useSearchModal(
    onClose,
    open,
  )

  return (
    <Modal open={open} onClickAway={onClose}>
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
