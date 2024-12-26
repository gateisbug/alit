import { lazy, useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

import useModalStore from '@util/store/modal.ts'

const ITEMFILTERMODALKEY = 'item-filter-modal'
const CHARFILTERMODALKEY = 'char-filter-modal'

const ItemFilterModal = lazy(
  () => import('@components/(modals)/filter/page-item.tsx'),
)
const CharaFilterModal = lazy(
  () => import('@components/(modals)/filter/page-chara.tsx'),
)

export default function useFilter() {
  const { modalAdd } = useModalStore()
  const [searchParams, setSearchParams] = useSearchParams()
  const { pathname } = useLocation()

  const handlerFilterButton = () => {
    if (pathname.includes('item')) {
      searchParams.set('modal', ITEMFILTERMODALKEY)
      setSearchParams(searchParams)
    } else {
      searchParams.set('modal', CHARFILTERMODALKEY)
      setSearchParams(searchParams)
    }
  }

  useEffect(() => {
    modalAdd({
      id: ITEMFILTERMODALKEY,
      children: <ItemFilterModal />,
    })
    modalAdd({
      id: CHARFILTERMODALKEY,
      children: <CharaFilterModal />,
    })
  }, [])

  useEffect(() => {
    // searchParams.delete('modal')
    // searchParams.delete('major')
    // searchParams.delete('minor')
    // searchParams.delete('rarity')
    // searchParams.delete('nation')

    return () => {
      searchParams.delete('modal')
      searchParams.delete('major')
      searchParams.delete('minor')
      searchParams.delete('rarity')
      searchParams.delete('nation')
    }
  }, [pathname])

  return {
    handlerFilterButton,
    label: '필터링 모달 표시',
  }
}
