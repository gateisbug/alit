import {
  ItemModalBody,
  ModalHeader,
  ObtainSection,
  StatSection,
} from '@components/item'
import { ExplainSection } from '@components/item/modal.sc'
import { Modal, ScrollView } from '@ui'
import { nationSplit, obtainDelimiter } from '@util/item/const'

import Portrait from '../common/portrait'

import Aircraft from './aircraft'
import Breadcrumbs from './breadcrumbs'
import ImageCard from './ImageCard'
import KeyValue from './KeyValue'

const statDelimiter = (value: string[]) => {
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
      return <Aircraft value={value[1]} />
    case '사속':
    case '발사간격':
      return value[1].replace(/초/g, ' 초')
    case '대갑비례':
      return value[1].replace(/\//g, ' / ')
    default:
      return value[1]
  }
}

export default function ItemModal(props: {
  item?: ItemInterface
  clickAway?: () => void
}) {
  const { item, clickAway } = props

  return (
    <Modal open={item !== undefined} onClickAway={clickAway}>
      <ItemModalBody>
        <ScrollView>
          <div className='modal-container'>
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
                {obtainDelimiter(item).map((v) => (
                  <ImageCard
                    key={`${item?.index}_${v.obtain}_${v.label}`}
                    src={v.img}
                    alt={v.img}
                    style={{ minWidth: '15rem', minHeight: '8.75rem' }}
                  >
                    <div className='fzs fwb'>{v.obtain}</div>
                    <div className='fzs fws'>{v.label}</div>
                  </ImageCard>
                ))}
              </div>

              <div className='nation'>
                <ImageCard
                  src={`images/nation/${item?.nation?.toLowerCase()}.webp`}
                  alt={item?.nation ?? 'unknown nation'}
                  style={{ minWidth: '10rem', minHeight: '10rem' }}
                >
                  <span className='nation-value fzs fwb'>
                    {nationSplit(item?.nation, 'nation')}
                  </span>
                </ImageCard>
              </div>
            </ObtainSection>

            <StatSection>
              {item?.status?.map((v) => {
                const stat = v.split(':')
                const value = statDelimiter(stat)
                return (
                  <KeyValue
                    key={`stat_${item?.index}_${stat[0]}_${stat[1]}`}
                    label={stat[0]}
                    value={value}
                  />
                )
              })}
            </StatSection>

            <ExplainSection>
              {item?.explain?.map((v) => <p key={v}>{v}</p>)}
            </ExplainSection>
          </div>
        </ScrollView>
      </ItemModalBody>
    </Modal>
  )
}
