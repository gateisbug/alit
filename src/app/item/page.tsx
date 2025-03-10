import { lazy, Suspense } from 'react'

import Loader from '@components/(common)/loader.tsx'
import { Page } from '@components/(common)/styled.ts'

const ItemDataGrid = lazy(() => import('./(data-grid)/data-grid.tsx'))

export default function ItemPage() {
  return (
    <div className='wrap h100'>
      <Page>
        <Suspense
          fallback={
            <div className='flex h100 ai-c jc-c'>
              <Loader />
            </div>
          }
        >
          <ItemDataGrid />
        </Suspense>
      </Page>
    </div>
  )
}
