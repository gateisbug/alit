import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import {
  MAJOR,
  MINOR,
  NATION,
  RARITY,
} from '@components/(modals)/filter/(const).ts'
import {
  FilterItem,
  FilterList,
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalSection,
  SectionHeader,
} from '@components/(modals)/filter/styled.tsx'

interface Props<T> {
  header: string
  state: T
  items: readonly { label: string; value: string }[]
  onClickAll: () => void
  onClickItem: (value: string) => void
}

function Section<T extends string | string[]>({
  header,
  state,
  items,
  onClickAll,
  onClickItem,
}: Props<T>) {
  return (
    <ModalSection>
      <SectionHeader>{header}</SectionHeader>
      <FilterList>
        <FilterItem data-active={!state.length} onClick={onClickAll}>
          전체
        </FilterItem>
        {items?.map((v) => (
          <FilterItem
            key={`${v.label}+${v.value}`}
            data-active={state.includes(v.value)}
            onClick={() => {
              onClickItem(v.value)
            }}
          >
            {v.label}
          </FilterItem>
        ))}
      </FilterList>
    </ModalSection>
  )
}

export default function FilterModal() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [major, setMajor] = useState(searchParams.get('major') ?? '')
  const [minor, setMinor] = useState<string[]>(
    searchParams.get('minor')?.split('_') ?? [],
  )
  const [rarity, setRarity] = useState<string[]>(
    searchParams.get('rarity')?.split('_') ?? [],
  )
  const [nation, setNation] = useState<string[]>(
    searchParams.get('nation')?.split('_') ?? [],
  )

  useEffect(() => {
    setMinor([])
  }, [major])

  useEffect(() => {
    if (major.length) searchParams.set('major', major)
    else searchParams.delete('major')

    searchParams.delete('minor')
    setSearchParams(searchParams)
  }, [major])

  useEffect(() => {
    if (minor.length) searchParams.set('minor', minor.join('_'))
    else searchParams.delete('minor')

    setSearchParams(searchParams)
  }, [minor])

  useEffect(() => {
    if (rarity.length) searchParams.set('rarity', rarity.join('_'))
    else searchParams.delete('rarity')

    setSearchParams(searchParams)
  }, [rarity])

  useEffect(() => {
    if (nation.length) searchParams.set('nation', nation.join('_'))
    else searchParams.delete('nation')

    setSearchParams(searchParams)
  }, [nation])

  const arrayHandler = (prev: string[], value: string) => {
    const curr = [...prev]
    const idx = curr.findIndex((v) => v === value)
    if (idx > -1) {
      curr.splice(idx, 1)
      return curr
    }
    curr.push(value)
    return curr
  }

  return (
    <ModalContainer>
      <ModalBody>
        <Section
          header='대분류'
          items={MAJOR}
          state={major}
          onClickAll={() => setMajor('')}
          onClickItem={(v) => {
            setMajor(v)
          }}
        />

        <Section
          header='소분류'
          items={MINOR.find((v) => v.value === major)?.items ?? []}
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
