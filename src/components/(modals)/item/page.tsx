import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

import { ModalClose } from '@components/(common)/modal.tsx'
import Portrait from '@components/(common)/portrait.tsx'
import { ITEMS, NATIONS, OBTAINS } from '@util/divider'

import { KeyValue, Breadcrumbs, ImageCard, Aircraft } from './components.tsx'
import {
  ExplainSection,
  Header,
  ItemModalBody,
  ItemModalHeader,
  ModalContainer,
  Nation,
  Obtain,
  ObtainSection,
  StatSection,
  TitleSection,
} from './styled.ts'

interface Props {
  item: ItemInterface
}

export default function ItemModal({ item }: Props) {
  const [searchParams, setSearchParams] = useSearchParams()

  const onClose = () => {
    searchParams.delete('modal')
    setSearchParams(searchParams)
  }

  const obtainRender = useCallback(
    () =>
      item.obtain?.map((v) => {
        const src =
          OBTAINS.find((o) => v.includes(o.index) && v.includes(o.value))
            ?.label ?? ''
        const split = v.split(':')
        let obtain = split[0]
        let label = split[1]

        switch (obtain) {
          case '상자깡':
            obtain += `(${
              NATIONS.find((n) => n.index === item.nation && n.value === 'box')
                ?.label
            })`
            break
          case '장비개발':
            label = `${
              NATIONS.find(
                (n) => n.index === item.nation && n.value === 'nation',
              )?.label
            }`
            break
          default:
            break
        }

        return (
          <ImageCard
            key={`${item.index}_${v}`}
            $src={src}
            $alt={v}
            $body={
              <>
                <p className='s2 fwb'>{obtain}</p>
                <p className='s2 fwm'>{label}</p>
              </>
            }
          />
        )
      }),
    [],
  )

  const nationRender = useCallback(
    () => (
      <ImageCard
        $src={`images/nation/${item.nation?.toLowerCase()}.webp`}
        $alt={item.nation ?? 'Nation'}
        $body={
          <p className='s2 fwb'>
            {NATIONS.find((v) => v.index === item.nation)?.label}
          </p>
        }
      />
    ),
    [],
  )

  const statRender = useCallback(
    () =>
      item?.status?.map((v) => {
        const stat = v.split(':')
        const value = (() => {
          switch (stat[0]) {
            case '스탯':
            case '스킬':
              return stat[1].replace(/,/g, ', ')
            case '대미지':
            case '발사패턴':
              return stat[1].replace(/\*/g, ' × ')
            case '기총':
            case '폭장':
            case '어뢰':
            case '로켓':
              return <Aircraft $value={stat[1]} />
            case '사속':
            case '발사간격':
              return stat[1].replace(/초/g, ' 초')
            case '대갑비례':
              return stat[1].replace(/\//g, ' / ')
            default:
              return stat[1]
          }
        })()

        return (
          <KeyValue
            key={`stat_${item?.index}_${stat[0]}_${stat[1]}`}
            $key={stat[0]}
            $value={value}
          />
        )
      }),
    [],
  )

  return (
    <ModalContainer>
      <ItemModalHeader className='flex jc-fe'>
        <ModalClose onClick={onClose} />
      </ItemModalHeader>

      <ItemModalBody>
        <Header>
          <Portrait
            path={`images/items/${item?.image}.webp`}
            size={72}
            item={item}
          />

          <TitleSection>
            <h2 className='s1 fcs'>{item?.name ?? '-'}</h2>
            <h3 className='b1 fwm fcw'>{item?.nickname ?? '-'}</h3>
            <Breadcrumbs
              $items={[
                ITEMS.find(
                  (v) => v.index === item?.domain && v.value === item?.class,
                )?.label,
                ITEMS.find(
                  (v) => v.index === item?.domain && v.value === item?.type,
                )?.label,
              ]}
            />
          </TitleSection>
        </Header>

        {item?.explain?.length ? (
          <ExplainSection>
            {item?.explain?.map((v) => <p key={v}>{v}</p>)}
          </ExplainSection>
        ) : null}

        <ObtainSection>
          <Obtain>{obtainRender()}</Obtain>
          <Nation>{nationRender()}</Nation>
        </ObtainSection>

        <StatSection data-length={Math.round((item?.status?.length ?? 8) / 2)}>
          {statRender()}
        </StatSection>
      </ItemModalBody>
    </ModalContainer>
  )
}
