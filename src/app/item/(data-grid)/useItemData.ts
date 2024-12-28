import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function useItemData() {
  const [searchParams] = useSearchParams()
  const majorCategory = searchParams.get('major')
  const minorCategory = searchParams.get('minor')
  const rarity = searchParams.get('rarity')
  const nation = searchParams.get('nation')
  const keyword = searchParams.get('keyword')

  const query = useQuery({
    queryKey: ['alit-item-list'],
    queryFn: async () => {
      const response = await fetch('json/item.json')
      return ((await response.json()) as unknown as ItemInterface[]) ?? []
    },
  })

  // const [raw, setRaw] = useState<ItemInterface[]>([])
  const [data, setData] = useState<ItemInterface[]>([])

  useEffect(() => {
    let rawData: ItemInterface[]

    if (!majorCategory && !minorCategory && !rarity && !nation) {
      rawData = query.data ?? []
    } else {
      const minor = minorCategory?.split('_') ?? []
      const rare = rarity?.split('_') ?? []
      const nat = nation?.split('_') ?? []

      rawData = (query.data ?? []).filter((v) => {
        const domain =
          majorCategory !== null ? v.domain === majorCategory : true
        const classes = minor.length > 0 ? minor.includes(v.class ?? '') : true
        const tier = rare.length > 0 ? rare.includes(v.tier ?? '') : true
        const ticker = nat.length > 0 ? nat.includes(v.nation ?? '') : true

        // if (!minorCategory) return flag
        // return flag && minorCategory.includes(v.class ?? '')
        return domain && classes && tier && ticker
      })
    }

    if (keyword) {
      const name = rawData?.filter((v) => v.name?.includes(keyword))
      const nickname = rawData?.filter((v) => v.nickname?.includes(keyword))
      const explain = rawData?.filter((v) =>
        v.explain?.join('. ').includes(keyword),
      )
      setData(Array.from(new Set(name.concat(nickname, explain))))
    } else {
      setData(rawData)
    }
  }, [query.data, keyword, majorCategory, minorCategory, rarity, nation])

  return data
}
