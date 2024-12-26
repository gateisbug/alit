import {
  CHAR_MAJORCATEGORY,
  CHAR_MINORCATEGORY,
  NATION,
  RARITY,
} from './(const-chara).ts'
import Section from './section.tsx'
import { ModalBody, ModalClose, ModalContainer } from './styled.tsx'
import useFilterModal from './useFilterModal.ts'

export default function CharaFilterModal() {
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
          header='함종'
          items={CHAR_MAJORCATEGORY}
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
          header='스탯'
          items={CHAR_MINORCATEGORY}
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
