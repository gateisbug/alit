import dynamic from 'next/dynamic'
import { headers } from 'next/headers'

import ItemTable from '@app/item/table/table'

const ItemData = dynamic(() => import('@/datum/item/all-data'))
const keys: ItemURL[] = [
  'gun',
  'torpedo',
  'antiair',
  'aircraft',
  'accessory',
  'special',
]

export default async function ItemPage() {
  const headersList = headers()
  const headerPathname = headersList.get('x-pathname') || ''
  const headerParams = headersList.get('x-params') || ''

  const category: keyof ItemJson =
    (headerPathname.split('/').at(2) as keyof ItemJson) ?? 'gun'
  const filter = new URLSearchParams(headerParams).get('filter')

  const renderProps = (items: ItemJson) => {
    let result: ItemInterface[] = []
    if (category.length === 0) {
      for (let i = 0; i < keys.length; i += 1) {
        result.push(...items[keys[i]])
      }
    }

    if (category in items) {
      if (filter === null || filter === '') {
        result = items[category]
      } else {
        result = items[category].filter((v) => v.class === filter)
      }
    }

    return <ItemTable data={result} />
  }

  return <ItemData>{renderProps}</ItemData>
}
