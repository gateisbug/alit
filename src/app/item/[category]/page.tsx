import dynamic from 'next/dynamic'
import { headers } from 'next/headers'

const ItemData = dynamic(() => import('@/datum/item/all-data'))

export default function page() {
  const headersList = headers()
  const headerPathname = headersList.get('x-pathname') || ''
  const headerParams = headersList.get('x-params') || ''

  const category: keyof ItemJson =
    (headerPathname.split('/').at(2) as keyof ItemJson) ?? 'gun'
  const filter = new URLSearchParams(headerParams).get('filter')

  const renderProps = (items: ItemJson) => {
    if (category in items) {
      if (!filter) {
        return (
          <div>
            {items[category].map((value) => (
              <span>{value.name}</span>
            ))}
          </div>
        )
      }
      return (
        <div>
          {items[category]
            .filter((v) => v.class === filter)
            .map((value) => (
              <span>{value.name}</span>
            ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className='page item index'>
      <ItemData>{renderProps}</ItemData>
    </div>
  )
}
