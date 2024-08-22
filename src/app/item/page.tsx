import { lazy, Suspense } from 'react'
import { useLoaderData } from 'react-router-dom'

import { Loader, Page } from '@components/(common)'

const DataGrid = lazy(() => import('./(data-grid).tsx'))

export default function ItemPage() {
  const data = useLoaderData() as ItemInterface[]

  return (
    <Page>
      <Suspense
        fallback={
          <div className='flex jc-c'>
            <Loader />
          </div>
        }
      >
        <DataGrid data={data} />
      </Suspense>
    </Page>
  )
}
