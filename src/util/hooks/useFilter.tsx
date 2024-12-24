import { lazy, useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

import useModalStore from '@util/store/modal.ts'

const ITEMFILTERMODALKEY = 'item-filter-modal'
// const CHARFILTERMODALKEY = 'char-filter-modal' // @TODO: 함순이 리스트 추가 시 반영

const ItemFilterModal = lazy(
  () => import('@components/(modals)/filter/page-item.tsx'),
)

export default function useFilter() {
  const { modalAdd } = useModalStore()
  const [searchParams, setSearchParams] = useSearchParams()
  const { pathname } = useLocation()

  const handlerFilterButton = () => {
    if (pathname) {
      searchParams.set('modal', ITEMFILTERMODALKEY)
      setSearchParams(searchParams)
    }
  }

  useEffect(() => {
    modalAdd({
      id: ITEMFILTERMODALKEY,
      children: <ItemFilterModal />,
    })
  }, [])

  useEffect(() => {
    searchParams.delete('modal')
    searchParams.delete('major')
    searchParams.delete('minor')
    searchParams.delete('rarity')
    searchParams.delete('nation')
  }, [pathname])

  return {
    handlerFilterButton,
    label: '필터링 모달 표시',
  }
}
