import debounce from 'lodash-es/debounce'
import {
  lazy,
  useCallback,
  useDeferredValue,
  useEffect,
  useId,
  useState,
} from 'react'
import { useSearchParams } from 'react-router-dom'

import Loader from '@components/(common)/loader.tsx'
import Portrait from '@components/(common)/portrait.tsx'
import {
  ITEMMODALKEY,
  SEARCHMODALKEY,
} from '@components/(modals)/(modal-keys).ts'
import { ResultItem } from '@components/(modals)/search/styled.ts'
import IndexedItemDB from '@util/IndexedItemDB.ts'
import useModalStore from '@util/store/modal.ts'

const ItemModal = lazy(() => import('@components/(modals)/item/page.tsx'))

export default function useSearchModal() {
  const { modalAdd } = useModalStore()
  const [searchParams, setSearchParams] = useSearchParams()

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

    getData().catch((rej) => {
      throw new Error(rej)
    })
  }, [deferredSearch])

  const clickResultHandler = (d: ItemInterface) => {
    modalAdd({
      id: ITEMMODALKEY,
      children: <ItemModal item={d} />,
    })

    searchParams.set('modal', ITEMMODALKEY)
    setSearchParams(searchParams)
  }

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
      <ResultItem
        key={item?.index}
        onClick={() => {
          clickResultHandler(item)
        }}
      >
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
      const flag = searchParams.get('modal') === SEARCHMODALKEY
      if (flag && e.key === 'Escape') {
        e.preventDefault()
        searchParams.delete('modal')
        setSearchParams(searchParams)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [searchParams])

  /** 모달이 켜지면 input에 자동 포커싱 */
  useEffect(() => {
    const flag = searchParams.get('modal') === SEARCHMODALKEY

    if (flag) {
      const input = document.getElementById(id)
      if (input) input.focus()
    }
  }, [id, searchParams])

  return {
    id,
    search,
    onChangeInput,
    renderResult,
    closeHandler: () => {
      searchParams.delete('modal')
      setSearchParams(searchParams)
    },
  }
}
