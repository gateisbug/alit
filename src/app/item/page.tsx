import { Suspense } from 'react'

import AllData from '@app/item/all-data'
import { CircularProgress } from '@ui'

export default async function ItemPage() {
  return (
    <div>
      <Suspense fallback={<CircularProgress />}>
        <AllData />
      </Suspense>
    </div>
  )
}
