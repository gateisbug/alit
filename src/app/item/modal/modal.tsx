import styled from 'styled-components'

import { nationSplit, obtainDelimiter } from '@/datum/item/const'
import KeyValue from '@app/item/modal/KeyValue'
import {
  ItemModalBody,
  ModalHeader,
  ObtainSection,
  StatSection,
} from '@components/item'
import { Modal, ScrollView } from '@ui'

import Portrait from '../common/portrait'

import Breadcrumbs from './breadcrumbs'
import ImageCard from './ImageCard'

interface Props {
  item?: ItemInterface
  clickAway?: () => void
}

export default function ItemModal(props: Props) {
  const { item, clickAway } = props

  return (
    <Modal open={item !== undefined} onClickAway={clickAway}>
      <ScrollView>
        <ItemModalBody>
          <ModalHeader>
            <Portrait
              item={item}
              size={72}
              style={{ width: '6rem', height: '6rem' }}
            />

            <div className='section'>
              <h2 className='fcs fzl'>{item?.name}</h2>
              <p className='fcw fzp'>{item?.nickname}</p>
              <Breadcrumbs item={item} />
            </div>
          </ModalHeader>

          <ObtainSection>
            <div className='obtain'>
              {obtainDelimiter(item).map((v, i) => (
                <ImageCard
                  key={`${item?.index}_${v.obtain}_${i}`}
                  src={v.img}
                  alt={v.img}
                >
                  <div className='fzs fwb'>{v.obtain}</div>
                  <div className='fzs fws'>{v.label}</div>
                </ImageCard>
              ))}
            </div>

            <div className='nation'>
              <ImageCard
                src={`/images/nation/${item?.nation?.toLowerCase()}.png`}
                alt={item?.nation ?? 'unknown nation'}
              >
                <span className='nation-value fzs fwb'>
                  {nationSplit(item?.nation, 'nation')}
                </span>
              </ImageCard>
            </div>
          </ObtainSection>

          <StatSection>
            {item?.status?.map((v, i) => {
              const item = v.split(':')
              return (
                <KeyValue
                  key={`stat_${v}_${i}`}
                  label={item[0]}
                  value={statDelimiter(item)}
                />
              )
            })}
          </StatSection>
        </ItemModalBody>
      </ScrollView>
    </Modal>
  )
}

const Aircraft = styled.span`
  text-decoration: underline;
`
const State = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: rgba(97, 97, 97, 0.92);
  border-radius: 0.25rem;
  z-index: 1;
`

function aircraftRender(value: string) {
  const [string, damage, ap] = value.split('\\t')
  const [weapon, count] = string.split('*')

  const title = ap ? (
    <State>
      <div>대미지: {damage}</div>
      <div>관통: {ap.replace(/\//g, ' / ')}</div>
    </State>
  ) : (
    <State>대미지: {damage}</State>
  )

  return (
    <>
      {/* <Tooltip title={title}> */}
      <Aircraft>{weapon}</Aircraft>
      {/* </Tooltip> */}
      <>&nbsp;× {count}</>
    </>
  )
}

function statDelimiter(value: string[]) {
  switch (value[0]) {
    case '스탯':
    case '스킬':
      return value[1].replace(/,/g, ', ')
    case '대미지':
    case '발사패턴':
      return value[1].replace(/\*/g, ' × ')
    case '기총':
    case '폭장':
    case '어뢰':
    case '로켓':
      return aircraftRender(value[1])
    case '사속':
    case '발사간격':
      return value[1].replace(/초/g, ' 초')
    case '대갑비례':
      return value[1].replace(/\//g, ' / ')
    default:
      return value[1]
  }
}
