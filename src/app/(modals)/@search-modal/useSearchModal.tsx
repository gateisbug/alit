import { debounce } from 'lodash-es'
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useId,
  useState,
} from 'react'

import { SEARCHMODALKEY } from '@app/(modals)/(modal-keys).ts'
import Loader from '@components/(common)/loader.tsx'
import { useModalStore } from '@components/(common)/modal'
import Portrait from '@components/(common)/portrait.tsx'
import { ResultItem } from '@components/@search-modal/styled.ts'
import IndexedItemDB from '@util/IndexedItemDB.ts'

export default function useSearchModal() {
  const { lists, drop } = useModalStore()

  const id = useId()
  const [search, setSearch] = useState('')
  const deferredSearch = useDeferredValue(search)

  const [result, setResult] = useState<ItemInterface[] | undefined>(undefined)
  const deferredResult = useDeferredValue(result)

  /** 입력 값을 debounce로 적용 */
  const onChangeInput = useCallback(
    debounce((value: string) => {
      setSearch(value)
    }, 250),
    [],
  )

  useEffect(() => {
    if (search.length === 0) {
      setResult(undefined)
      return
    }

    const getData = async () => {
      const data = await (await IndexedItemDB.getInstance()).getAllData()

      const finder = data?.filter(
        (v) =>
          v.name?.includes(deferredSearch) ||
          v.nickname?.includes(deferredSearch) ||
          v.explain?.join('. ').includes(deferredSearch),
      )

      setResult([...finder])
    }

    // eslint-disable-next-line no-console
    getData().catch((rej) => console.error(rej))
  }, [deferredSearch])

  /** 검색 결과를 렌더링 */
  const renderResult = useCallback(() => {
    if (deferredSearch.length === 0) return null

    if (!deferredResult)
      return (
        <div className='flex h100 ai-c jc-c'>
          <Loader />
        </div>
      )

    if (deferredResult?.length === 0) {
      return (
        <div className='flex column ai-c jc-c fcs nodata'>
          <p className='e1'>\(o_o)/</p>
          <p className='t4'>No Search Data</p>
        </div>
      )
    }

    return deferredResult.map((item) => (
      <ResultItem key={item?.index}>
        <Portrait
          item={item}
          path={`images/items/${item?.image}_x48.webp`}
          size={36}
        />
        <span>{item.name}</span>
      </ResultItem>
    ))
  }, [deferredSearch, deferredResult])

  /** 키 입력 이벤트를 할당 */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        drop(SEARCHMODALKEY)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  /** 모달이 켜지면 input에 자동 포커싱 */
  useEffect(() => {
    if (lists.includes(SEARCHMODALKEY)) {
      const input = document.getElementById(id)
      if (input) input.focus()
    }
  }, [id, lists])

  return {
    id,
    search,
    onChangeInput,
    renderResult,
  }
}
