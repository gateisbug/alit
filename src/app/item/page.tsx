import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { CircularProgress } from '@ui'

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
  const renderProps = (items: ItemJson) => {
    const result: ItemInterface[] = []
    for (let i = 0; i < keys.length; i++) result.push(...items[keys[i]])

    return (
      <div>
        {result.map((value) => (
          <span key={value.index}>{value.name}</span>
        ))}
      </div>
    )
  }

  return (
    <div className='page item index'>
      <Suspense fallback={<CircularProgress />}>
        <ItemData>{renderProps}</ItemData>
      </Suspense>
    </div>
  )
}
