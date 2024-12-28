import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function int(a: string[], b?: string[]) {
  return a.filter((v) => (b ?? []).includes(v)).length > 0
}

function is(a: string[], b?: string[]) {
  return a.filter((m) => (b ?? []).join('_').includes(m)).length > 0
}

export default function useCharData() {
  const [searchParams] = useSearchParams()
  const majorCategory = searchParams.get('major')
  const minorCategory = searchParams.get('minor')
  const rarity = searchParams.get('rarity')
  const nation = searchParams.get('nation')
  const keyword = searchParams.get('keyword')

  const query = useQuery({
    queryKey: ['alit-character-list'],
    queryFn: async () => {
      const response = await fetch('json/character.json')
      return ((await response.json()) as unknown as any[]) ?? []
    },
  })

  const [data, setData] = useState<CharacterInterface[]>([])

  useEffect(() => {
    let rawData: CharacterInterface[]

    if (!majorCategory && !minorCategory && !rarity && !nation) {
      rawData = query.data ?? []
    } else {
      const major = majorCategory?.split('_') ?? []
      const minor = minorCategory?.split('_') ?? []
      const rare = rarity?.split('_') ?? []
      const nat = nation?.replace(/-/g, '_').split('_') ?? []

      rawData = (query.data ?? []).filter((v: CharacterInterface) => {
        const domain = major.length > 0 ? is(major, v.category) : true
        const stats = minor.length > 0 ? is(minor, v.stat) : true
        const tier = rare.length > 0 ? int(rare, v.rarity) : true
        const ticker = nat.length > 0 ? nat.includes(v.nation ?? '') : true

        return domain && stats && tier && ticker
      })
    }

    if (keyword) {
      const name = rawData?.filter((v) => v.name?.includes(keyword))
      // const nickname = rawData?.filter((v) => v.nickname?.includes(keyword))
      // const explain = rawData?.filter((v) =>
      //   v.explain?.join('. ').includes(keyword),
      // )
      // setData(Array.from(new Set(name.concat(nickname, explain))))
      setData(name)
    } else {
      setData(rawData)
    }
  }, [query.data, keyword, majorCategory, minorCategory, rarity, nation])

  return data
}
