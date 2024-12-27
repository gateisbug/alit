import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import {
  CHAR_MAJORCATEGORY,
  CHAR_MINORCATEGORY,
  NATION,
  RARITY,
} from './(const-chara).ts'
import Section from './section.tsx'
import { ModalBody, ModalClose, ModalContainer } from './styled.tsx'

export default function CharaFilterModal() {
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
    if (major.length) {
      const get = searchParams.get('major') ?? ''

      if (get !== major) searchParams.set('major', major)
      else return
    } else {
      searchParams.delete('major')
    }

    setSearchParams(searchParams)
  }, [major])

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

  return (
    <ModalContainer>
      <ModalBody>
        <Section
          header='함종'
          items={CHAR_MAJORCATEGORY}
          state={major}
          onClickAll={() => {
            setMajor('')
          }}
          onClickItem={(v) => {
            setMajor(v)
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
