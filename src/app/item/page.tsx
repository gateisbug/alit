import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import ItemTable from '@app/item/table/table'
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
    for (let i = 0; i < keys.length; i += 1) {
      result.push(...items[keys[i]])
    }

    return <ItemTable data={result} />
  }

  return (
    <div className='page item index'>
      <Suspense fallback={<CircularProgress />}>
        <ItemData>{renderProps}</ItemData>
      </Suspense>
    </div>
  )
}
