import { headers } from 'next/headers'
import { ReactNode } from 'react'

async function fetchAllItem() {
  try {
    const JSON: ItemJson =
      (import('@/datum/item/all.json') as unknown as ItemJson) ?? []
    return JSON
  } catch (error) {
    throw new Error('Failed to fetch item')
  }
}

interface Props {
  children: (items: ItemInterface[]) => ReactNode
}

const keys: ItemURL[] = [
  'gun',
  'torpedo',
  'antiair',
  'aircraft',
  'accessory',
  'special',
]

export default async function AllData({ children }: Props) {
  const JSON = await fetchAllItem()

  const headersList = headers()
  const headerPathname = headersList.get('x-pathname') || ''
  const headerParams = new URLSearchParams(headersList.get('x-params') || '')

  const category: keyof ItemJson =
    (headerPathname.split('/').at(2) as keyof ItemJson) ?? 'gun'
  const filter = headerParams.get('filter')
  // const search = new URLSearchParams(headerParams).get('search')
  // const select = new URLSearchParams(headerParams).get('select')

  const items = (() => {
    let result: ItemInterface[] = []
    if (category.length === 0) {
      for (let i = 0; i < keys.length; i += 1) {
        result.push(...JSON[keys[i]])
      }
    }

    if (category in JSON) {
      if (filter === null || filter === '') {
        result = JSON[category]
      } else {
        result = JSON[category].filter((v) => v.class === filter)
      }
    }

    return result
  })()

  return <>{children(items)}</>
}
