import { lazy, Suspense } from 'react'
import { useLoaderData } from 'react-router-dom'

import Loader from '@components/(common)/loader.tsx'
import { Page } from '@components/item/styled.ts'

export default function ItemPage() {
  const data = useLoaderData() as ItemInterface[]

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
          <div className='flex h100 ai-c jc-c'>
            <Loader />
          </div>
        </Suspense>
      </Page>
    </div>
  )
}
