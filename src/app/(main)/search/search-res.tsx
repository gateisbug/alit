'use client'

import debounce from 'lodash-es/debounce'
import { useCallback, useDeferredValue, useEffect, useState } from 'react'

import Portrait from '@app/item/common/portrait'
import { CategoryTitle, ResultItem, SearchResult } from '@components/(main)'
import fetchItemJson from '@util/item/fetchItemJson'

const keys: ItemURL[] = [
  'gun',
  'torpedo',
  'antiair',
  'aircraft',
  'accessory',
  'special',
]

// TODO: Recoil에서 데이터를 포함하기 시작하면 이곳에서 탐색할 수 있도록 변경할 것
export default function SearchRes({ value }: { value: string }) {
  const [items, setItems] = useState<ItemInterface[]>([])
  const [results, setResults] = useState<ItemInterface[]>([])
  const defferedResult = useDeferredValue(results)

  useEffect(() => {
    fetchItemJson()
      .then((res) => {
        const result: ItemInterface[] = []
        for (let i = 0; i < keys.length; i += 1) {
          result.push(...res[keys[i]])
        }
        setItems(result)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  const searchRender = useCallback(
    debounce((data: ItemInterface[], search: string) => {
      const name = data.filter((v) => v.name?.includes(search))
      const nickname = data.filter((v) => v.nickname?.includes(search))
      const explain = data.filter((v) =>
        v.explain?.join('. ')?.includes(search),
      )

      const seenIndexes = new Set()
      const res = name.concat(nickname, explain).filter((item) => {
        if (seenIndexes.has(item.index)) {
          return false
        }
        seenIndexes.add(item.index)
        return true
      })

      setResults(res)
    }, 300),
    [],
  )

  useEffect(() => {
    if (items.length === 0 || value.length === 0) return

    searchRender(items, value)
  }, [items, value])

  return (
    <SearchResult>
      <CategoryTitle>Result</CategoryTitle>
      <div>
        {defferedResult.map((v) => (
          <ResultItem key={`${v.index}_${v.name}_${v.tier}`}>
            <Portrait
              item={v}
              size={36}
              style={{ width: '3rem', height: '3rem', borderWidth: '3px' }}
            />
            <span>{v.name}</span>
          </ResultItem>
        ))}
      </div>
    </SearchResult>
  )
}
