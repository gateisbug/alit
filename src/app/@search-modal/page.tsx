import { debounce } from 'lodash-es'
import { useCallback, useEffect, useId, useState } from 'react'

import CATEGORY from '@app/@search-modal/(const).ts'
import { IconSearch } from '@assets/icons'
import Portrait from '@components/(common)/portrait.tsx'
import Modal from '@components/@search-modal/modal.ts'
import {
  CategoryBox,
  CatrgoryItem,
  ModalBody,
  ModalHeader,
  ModalSearchForm,
  ResultItem,
  SearchResult,
  SearchScreen,
  Shortcut,
} from '@components/@search-modal/styled.ts'
import fetchItemData from '@util/fetchJson.ts'

interface Props {
  open?: boolean
  onClose: () => void
}

export default function SearchModal({ open, onClose }: Props) {
  const id = useId()
  const [search, setSearch] = useState('')
  const [data, setData] = useState<ItemInterface[]>([])

  /** 입력 값을 debounce로 적용 */
  const onChangeInput = useCallback(
    debounce((value: string) => {
      setSearch(value)
    }, 250),
    [],
  )

  /** 검색 결과를 렌더링 */
  const renderResult = useCallback(() => {
    if (search.length === 0) return null

    const finder = data?.filter(
      (v) =>
        v.name?.includes(search) ||
        v.nickname?.includes(search) ||
        v.explain?.join('. ').includes(search),
    )

    // return <div>hello</div>
    return search.length > 0 ? (
      finder.map((item) => (
        <ResultItem key={item?.index}>
          <Portrait
            item={item}
            path={`images/items/${item?.image}_x48.webp`}
            size={36}
          />
          <span>{item.name}</span>
        </ResultItem>
      ))
    ) : (
      <div>nil</div>
    )
  }, [data, search])

  /** 검색에 사용할 데이터를 페치 */
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchItemData().then((res: ItemInterface[]) => {
      setData(res)
    })
  }, [])

  /** 키 입력 이벤트를 할당 */
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

  /** 모달이 켜지면 input에 자동 포커싱 */
  useEffect(() => {
    if (open) {
      const input = document.getElementById(id)
      if (input) input.focus()
    }
  }, [id, open])

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
