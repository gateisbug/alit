import { debounce } from 'lodash-es'
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useId,
  useState,
} from 'react'

import Portrait from '@components/(common)/portrait.tsx'
import { ResultItem } from '@components/@search-modal/styled.ts'
import fetchItemData from '@util/fetchJson.ts'
import Loader from '@components/(common)/loader.tsx'

export default function useSearchModal(onClose: () => void, open?: boolean) {
  const id = useId()
  const [search, setSearch] = useState('')
  const [data, setData] = useState<ItemInterface[]>([])
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

    const finder = data?.filter(
      (v) =>
        v.name?.includes(deferredSearch) ||
        v.nickname?.includes(deferredSearch) ||
        v.explain?.join('. ').includes(deferredSearch),
    )

    setResult([...finder])
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

  /** 검색에 사용할 데이터를 페치 */
  useEffect(() => {
    fetchItemData()
      .then((res: ItemInterface[]) => {
        setData(res)
      })
      .catch((rej) => {
        // eslint-disable-next-line no-console
        console.error(rej)
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

  return {
    id,
    search,
    onChangeInput,
    renderResult,
  }
}
