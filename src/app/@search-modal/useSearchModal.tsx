import { debounce } from 'lodash-es'
import { useCallback, useEffect, useId, useState } from 'react'

import Portrait from '@components/(common)/portrait.tsx'
import { ResultItem } from '@components/@search-modal/styled.ts'
import fetchItemData from '@util/fetchJson.ts'

export default function useSearchModal(onClose: () => void, open?: boolean) {
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
  const renderResult = () => {
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
  }

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

  return {
    id,
    search,
    onChangeInput,
    renderResult,
  }
}
