import fetchItemJson from './fetchItemJson'

const keys: ItemURL[] = [
  'gun',
  'torpedo',
  'antiair',
  'aircraft',
  'accessory',
  'special',
]

export default async function fetchItemData(request: Request) {
  window.scrollTo(0, 0)

  const JSON = await fetchItemJson()

  const { pathname, searchParams } = new URL(request.url)

  const category: keyof ItemJson | '' =
    (pathname.split('/').at(2) as keyof ItemJson) ?? ''
  const filter = searchParams.get('filter')

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
