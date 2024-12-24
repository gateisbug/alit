import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import IndexedItemDB from '@util/IndexedItemDB.ts'

export default function useItemData() {
  const [searchParams] = useSearchParams()
  const majorCategory = searchParams.get('major')
  const minorCategory = searchParams.get('minor')
  const rarity = searchParams.get('rarity')
  const nation = searchParams.get('nation')
  const keyword = searchParams.get('keyword')

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
    let rawData: ItemInterface[]

    if (!majorCategory && !minorCategory && !rarity && !nation) {
      rawData = raw
    } else {
      const minor = minorCategory?.split('_') ?? []
      const rare = rarity?.split('_') ?? []
      const nat = nation?.split('_') ?? []

      rawData = raw.filter((v) => {
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
  }, [raw, keyword, majorCategory, minorCategory, rarity, nation])

  return data
}
