import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import IndexedItemDB from '@util/IndexedItemDB.ts'

export default function useGridData() {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')
  const division = searchParams.get('division')

  const [raw, setRaw] = useState<ItemInterface[]>([])
  const [data, setData] = useState(raw)

  useEffect(() => {
    const getData = async () => {
      const value = await (await IndexedItemDB.getInstance()).getAllData()
      setRaw(value)
    }
    getData().catch((rej) => {
      throw new Error(rej)
    })
  }, [])

  useEffect(() => {
    if (!category && !division) {
      setData(raw)
    } else {
      const d = raw.filter((v) => {
        if (!division) return v.domain === category
        return v.domain === category && v.class === division
      })
      setData(d)
    }
  }, [raw, category, division])

  return data
}
