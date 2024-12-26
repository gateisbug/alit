import { Suspense } from 'react'

import Loader from '@components/(common)/loader.tsx'
import { Page } from '@components/(common)/styled.ts'

import DataGrid from './(data-grid)/data-grid.tsx'

export default function CharacterPage() {
  return (
    <div>
      <Page>
        <Suspense
          fallback={
            <div className='flex h100 ai-c jc-c'>
              <Loader />
            </div>
          }
        >
          <DataGrid />
        </Suspense>
      </Page>
    </div>
  )
}
