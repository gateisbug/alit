type ItemJson = Record<ItemDomain, ItemInterface[]>

const keys: ItemDomain[] = [
  'gun',
  'torpedo',
  'antiair',
  'aircraft',
  'accessory',
  'special',
]

async function fetchItemJson() {
  try {
    const response = await fetch('json/all.json')
    return ((await response.json()) as unknown as ItemJson) ?? []
  } catch (error) {
    throw new Error('Failed to fetch item')
  }
}

export default async function fetchItemData(request: Request) {
  window.scrollTo(0, 0)

  const JSON = await fetchItemJson()

  const { pathname, searchParams } = new URL(request.url)

  const category: keyof ItemJson | '' =
    (pathname.split('/')[3] as keyof ItemJson) ?? ''
  const filter = searchParams.get('filter')

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

  // return (() => {
  //   let result: ItemInterface[] = []
  //   if (category.length === 0) {
  //     for (let i = 0; i < keys.length; i += 1) {
  //       result.push(...JSON[keys[i]])
  //     }
  //   }
  //
  //   if (category in JSON) {
  //     if (filter === null || filter === '') {
  //       result = JSON[category]
  //     } else {
  //       result = JSON[category].filter((v) => v.class === filter)
  //     }
  //   }
  //
  //   return result
  // })()
}
