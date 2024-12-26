import {
  ITEM_MAJORCATEGORY,
  ITEM_MINORCATEGORY,
  NATION,
  RARITY,
} from './(const-item).ts'
import Section from './section.tsx'
import { ModalBody, ModalClose, ModalContainer } from './styled.tsx'
import useFilterModal from './useFilterModal.ts'

export default function ItemFilterModal() {
  const {
    major,
    setMajor,
    minor,
    setMinor,
    rarity,
    setRarity,
    nation,
    setNation,
    arrayHandler,
  } = useFilterModal()

  return (
    <ModalContainer>
      <ModalBody>
        <Section
          header='대분류'
          items={ITEM_MAJORCATEGORY}
          state={major}
          onClickAll={() => {
            setMajor('')
            setMinor([])
          }}
          onClickItem={(v) => {
            setMajor(v)
            setMinor([])
          }}
        />

        <Section
          header='소분류'
          items={ITEM_MINORCATEGORY.find((v) => v.value === major)?.items ?? []}
          state={minor}
          onClickAll={() => setMinor([])}
          onClickItem={(v) => {
            setMinor((prev) => arrayHandler(prev, v))
          }}
        />

        <Section
          header='등급'
          items={RARITY}
          state={rarity}
          onClickAll={() => setRarity([])}
          onClickItem={(v) => {
            setRarity((prev) => arrayHandler(prev, v))
          }}
        />

        <Section
          header='국가'
          items={NATION}
          state={nation}
          onClickAll={() => setNation([])}
          onClickItem={(v) => {
            setNation((prev) => arrayHandler(prev, v))
          }}
        />
      </ModalBody>

      <ModalClose />
    </ModalContainer>
  )
}
