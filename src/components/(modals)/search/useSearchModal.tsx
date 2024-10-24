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
      searchParams.set('keyword', value)
      setSearchParams(searchParams)
    }, 300),
    [],
  )

  const onInputEnter = (value: string) => {
    setSearch(value)
    searchParams.set('keyword', value)
    setSearchParams(searchParams)
  }

  useEffect(() => {
    if (search.length === 0) {
      setResult(undefined)
      return
    }

    const getData = async () => {
      const data = await (await IndexedItemDB.getInstance()).getAllData()

      const name = data?.filter((v) => v.name?.includes(deferredSearch))
      const nickname = data?.filter((v) => v.nickname?.includes(deferredSearch))
      const explain = data?.filter((v) =>
        v.explain?.join('. ').includes(deferredSearch),
      )

      setResult(Array.from(new Set(name.concat(nickname, explain))))
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

    const highlightText = (text?: string) => {
      if (!text) return text

      const parts = text.split(new RegExp(`(${deferredSearch})`, 'gi'))
      return parts.map((part, index) =>
        part.includes(search) ? (
          <mark key={`${part}_${index}`}>{part}</mark>
        ) : (
          part
        ),
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
        <div className='flex column jc-c ai-fs info'>
          <div>{highlightText(item.name)}</div>
          <div className='fcw'>{highlightText(item.nickname)}</div>
        </div>
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
        searchParams.delete('keyword')
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

  useEffect(() => {
    const keyword = searchParams.get('keyword')
    if (keyword === null) {
      setSearch('')
      const input = document.getElementById(id)
      if (input) (input as HTMLInputElement).value = ''
    }
  }, [searchParams])

  useEffect(() => {
    const keyword = searchParams.get('keyword')
    if (search.length === 0 && keyword !== null && (keyword.length ?? 0) > 0) {
      setSearch(keyword)
      const input = document.getElementById(id)
      if (input) (input as HTMLInputElement).value = keyword
    }
  }, [id, search, searchParams])

  return {
    id,
    search,
    onChangeInput,
    onInputEnter,
    renderResult,
    closeHandler: () => {
      searchParams.delete('modal')
      searchParams.delete('keyword')
      setSearchParams(searchParams)
    },
  }
}
