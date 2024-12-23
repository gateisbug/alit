import { useEffect, useState } from 'react'

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
import { useSearchParams } from 'react-router-dom'

export default function FilterModal() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [major, setMajor] = useState(searchParams.get('major') ?? 'all')
  const [minor, setMinor] = useState<string[]>(
    searchParams.get('minor')?.split('_') ?? [],
  )
  const [rarity, setRarity] = useState<string[]>(
    searchParams.get('rarity')?.split('_') ?? [],
  )
  const [nation, setNation] = useState<string[]>([])

  useEffect(() => {
    setMinor([])
  }, [major])

  useEffect(() => {
    if (major !== 'all') {
      searchParams.set('major', major)
    } else {
      searchParams.delete('major')
    }

    searchParams.delete('minor')
    setSearchParams(searchParams)
  }, [major])

  useEffect(() => {
    if (minor.length) {
      searchParams.set('minor', minor.join('_'))
      setSearchParams(searchParams)
    } else {
      searchParams.delete('minor')
      setSearchParams(searchParams)
    }
  }, [minor])

  return (
    <ModalContainer>
      <ModalBody>
        <ModalSection>
          <SectionHeader>대분류</SectionHeader>
          <FilterList>
            {MAJOR.map((v) => (
              <FilterItem
                data-active={v.value === major}
                onClick={() => {
                  setMajor(v.value)
                }}
                key={v.value}
              >
                {v.label}
              </FilterItem>
            ))}
          </FilterList>
        </ModalSection>

        <ModalSection>
          <SectionHeader>소분류</SectionHeader>
          <FilterList>
            <FilterItem
              data-active={!minor.length}
              onClick={() => {
                setMinor([])
              }}
            >
              전체
            </FilterItem>
            {MINOR.find((v) => v.value === major)?.items?.map((v) => (
              <FilterItem
                data-active={minor.includes(v.value)}
                onClick={() => {
                  setMinor((prev) => {
                    const curr = [...prev]
                    const idx = curr.findIndex((u) => u === v.value)
                    if (idx > -1) {
                      curr.splice(idx, 1)
                      return curr
                    }
                    curr.push(v.value)
                    return curr
                  })
                }}
              >
                {v.label}
              </FilterItem>
            ))}
          </FilterList>
        </ModalSection>

        <ModalSection>
          <SectionHeader>등급</SectionHeader>
          <FilterList>
            <FilterItem
              data-active={!rarity.length}
              onClick={() => {
                setRarity([])
              }}
            >
              전체
            </FilterItem>
            {RARITY.map((v) => (
              <FilterItem
                data-active={rarity.includes(v.value)}
                onClick={() => {
                  setRarity((prev) => {
                    const curr = [...prev]
                    const idx = curr.findIndex((u) => u === v.value)
                    if (idx > -1) {
                      curr.splice(idx, 1)
                      return curr
                    }
                    curr.push(v.value)
                    return curr
                  })
                }}
              >
                {v.label}
              </FilterItem>
            ))}
          </FilterList>
        </ModalSection>

        <ModalSection>
          <SectionHeader>국가</SectionHeader>
          <FilterList>
            <FilterItem
              data-active={!nation.length}
              onClick={() => {
                setNation([])
              }}
            >
              전체
            </FilterItem>
            {NATION.map((v) => (
              <FilterItem
                data-active={nation.includes(v.value)}
                onClick={() => {
                  setNation((prev) => {
                    const curr = [...prev]
                    const idx = curr.findIndex((u) => u === v.value)
                    if (idx > -1) {
                      curr.splice(idx, 1)
                      return curr
                    }
                    curr.push(v.value)
                    return curr
                  })
                }}
              >
                {v.label}
              </FilterItem>
            ))}
          </FilterList>
        </ModalSection>
      </ModalBody>

      <ModalClose />
    </ModalContainer>
  )
}
