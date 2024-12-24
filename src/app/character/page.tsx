import { Suspense } from 'react'

import Loader from '@components/(common)/loader.tsx'
import { Page } from '@components/(common)/styled.ts'

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
          함순이 리스트
        </Suspense>
      </Page>
    </div>
  )
}
