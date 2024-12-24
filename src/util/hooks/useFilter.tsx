import { lazy, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import useModalStore from '@util/store/modal.ts'

const FILTERMODALKEY = 'item-filter-modal'

const ItemFilterModal = lazy(
  () => import('@components/(modals)/filter-item/page.tsx'),
)

export default function useFilter() {
  const { modalAdd } = useModalStore()
  const [searchParams, setSearchParams] = useSearchParams()

  const handlerFilterButton = () => {
    searchParams.set('modal', FILTERMODALKEY)
    setSearchParams(searchParams)
  }

  useEffect(() => {
    modalAdd({
      id: FILTERMODALKEY,
      children: <ItemFilterModal />,
    })
  }, [])

  return {
    handlerFilterButton,
    label: '필터링 모달 표시',
  }
}
