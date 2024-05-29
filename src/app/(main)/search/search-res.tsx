import Portrait from '@app/item/common/portrait'
import { CategoryTitle, ResultItem, SearchResult } from '@components/(main)'
import fetchItemJson from '@util/item/fetchItemJson'
import { selectItemStore } from '@util/item/itemStore'
import debounce from 'lodash-es/debounce'
import { useDeferredValue, useEffect, useMemo, useState } from 'react'
import { useSetRecoilState } from 'recoil'

const keys: ItemURL[] = [
  'gun',
  'torpedo',
  'antiair',
  'aircraft',
  'accessory',
  'special',
]

interface Props {
  value: string
  onClickClose: () => void
}

export default function SearchRes(props: Props) {
  const { value, onClickClose } = props

  const [items, setItems] = useState<ItemInterface[]>([])
  const [results, setResults] = useState<ItemInterface[]>([])
  const defferedResult = useDeferredValue(results)
  const setSelectItem = useSetRecoilState(selectItemStore)

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
        throw new Error(err)
      })
  }, [])

  const debouncedSearch = useMemo(
    () =>
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

    debouncedSearch(items, value)
  }, [items, debouncedSearch, value])

  useEffect(() => {
    if(value.length === 0 ) {
      setResults([]);
    }
  }, [value])
  
  useEffect(() => () => {
      setResults([]);
    }, [])

  const resultClickHandler = (item: ItemInterface) => {
    setSelectItem(item)
    onClickClose()
  }

  return (
    <SearchResult>
      <CategoryTitle>Result</CategoryTitle>
      <div>
        {defferedResult.map((v) => (
          <ResultItem
            key={`${v.index}_${v.name}_${v.tier}`}
            onClick={() => {
              resultClickHandler(v)
            }}
          >
            <Portrait
              item={v}
              size={36}
              style={{ width: '3rem', height: '3rem', borderWidth: '0.1875rem' }}
            />
            <span>{v.name}</span>
          </ResultItem>
        ))}
        {results.length === 0 && (
          <div className='nodata'>
            <p>\(o_o)/</p>
            <p>No Search Data</p>
          </div>
        )}
      </div>
    </SearchResult>
  )
}
