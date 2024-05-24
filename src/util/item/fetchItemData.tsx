import { headers } from 'next/headers'

import fetchItemJson from './fetchItemJson'

const keys: ItemURL[] = [
  'gun',
  'torpedo',
  'antiair',
  'aircraft',
  'accessory',
  'special',
]

export default async function fetchItemData() {
  const JSON = await fetchItemJson()

  const headersList = headers()
  const headerPathname = headersList.get('x-pathname') || ''
  const headerParams = new URLSearchParams(headersList.get('x-params') || '')

  const category: keyof ItemJson =
    (headerPathname.split('/').at(2) as keyof ItemJson) ?? 'gun'
  const filter = headerParams.get('filter')
  // const search = new URLSearchParams(headerParams).get('search')
  // const select = new URLSearchParams(headerParams).get('select')

  return (() => {
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
}
