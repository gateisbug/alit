import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import {
  ITEM_MAJORCATEGORY,
  ITEM_MINORCATEGORY,
  ITEM_TYPECATEGORY,
  NATION,
  RARITY,
} from './(const-item).ts'
import Section from './section.tsx'
import { ModalBody, ModalClose, ModalContainer } from './styled.tsx'

export default function ItemFilterModal() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [major, setMajor] = useState(searchParams.get('major') ?? '')
  const [minor, setMinor] = useState<string[]>(
    searchParams.get('minor')?.split('_') ?? [],
  )
  const [types, setTypes] = useState<string>(searchParams.get('type') ?? '')
  const [rarity, setRarity] = useState<string[]>(
    searchParams.get('rarity')?.split('_') ?? [],
  )
  const [nation, setNation] = useState<string[]>(
    searchParams.get('nation')?.split('_') ?? [],
  )

  useEffect(() => {
    if (major.length) {
      const get = searchParams.get('major') ?? ''

      if (get !== major) searchParams.set('major', major)
      else return
    } else {
      searchParams.delete('major')
    }

    searchParams.delete('minor')
    searchParams.delete('type')
    setSearchParams(searchParams)
  }, [major])

  useEffect(() => {
    if (types.length) {
      searchParams.set('type', types)
    } else {
      searchParams.delete('type')
    }
    setSearchParams(searchParams)
  }, [types])

  useEffect(() => {
    if (minor.length) {
      const get = searchParams.get('minor') ?? ''
      const join = minor.join('_')

      if (get !== join) searchParams.set('minor', join)
      else return
    } else {
      searchParams.delete('minor')
    }

    setSearchParams(searchParams)
  }, [minor])

  useEffect(() => {
    if (rarity.length) {
      const get = searchParams.get('rarity') ?? ''
      const join = rarity.join('_')

      if (get !== join) searchParams.set('rarity', join)
      else return
    } else {
      searchParams.delete('rarity')
    }

    setSearchParams(searchParams)
  }, [rarity])

  useEffect(() => {
    if (nation.length) {
      const get = searchParams.get('nation') ?? ''
      const join = nation.join('_')

      if (get !== join) searchParams.set('nation', join)
      else return
    } else {
      searchParams.delete('nation')
    }

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

  const onClose = () => {
    searchParams.delete('modal')
    setSearchParams(searchParams)
  }

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
            setTypes('')
          }}
          onClickItem={(v) => {
            setMajor(v)
            setMinor([])
            setTypes('')
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
          header='종류'
          items={ITEM_TYPECATEGORY.find((v) => v.value === major)?.items ?? []}
          state={types}
          onClickAll={() => setTypes('')}
          onClickItem={(v) => {
            setTypes(v)
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

      <ModalClose onClick={onClose} />
    </ModalContainer>
  )
}
