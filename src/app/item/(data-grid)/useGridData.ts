import { useLoaderData, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function useGridData() {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')
  const division = searchParams.get('division')

  const raw = useLoaderData() as ItemInterface[]

  const [data, setData] = useState(raw)

  useEffect(() => {
    if (!category && !division) {
      setData(raw)
    } else {
      const d = raw.filter((v) => {
        if (!division) return v.domain === category
        return v.domain === category && v.class == division
      })
      setData(d)
    }
  }, [category, division])

  return data
}
