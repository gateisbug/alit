import Image from '@components/common/Image'
import { CSSProperties } from 'react'
import styled from 'styled-components'

const PortraitFrame = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  //width: 4rem;
  //height: 4rem;
  border-radius: 0.25rem;
  box-sizing: border-box;
  padding: 0.375rem;
  border: 0.1875rem solid #7e5475;

  &[data-stroke='default'] {
    border-color: #7e5475; // #666666
  }
  &[data-stroke='red'] {
    border-color: #e4002b; // #d61314; #e4002b; #ff2a1b;
  }
  &[data-stroke='yellow'] {
    border-color: #f3e500; // #f3f521
  }
  &[data-stroke='blue'] {
    border-color: #0047bb; // #0801d9
  }
  &[data-stroke='violet'] {
    border-color: #ea27c2; // #db16db
  }

  &[data-tier='N'] {
    background-color: #ddd;
  }
  &[data-tier='R'] {
    background-color: #9fe8ff;
  }
  &[data-tier='SR'] {
    background-color: #c4adff;
  }
  &[data-tier='SSR'] {
    background-color: #ee9;
  }
  &[data-tier='UR'] {
    background: linear-gradient(120deg, #fbffca, #baffbf, #a7efff, #ffabff);
  }
`

export default function Portrait(props: {
  item?: ItemInterface
  className?: string
  size?: number
  style?: CSSProperties
}) {
  const { item, className, size = 48, style } = props

  const strokeSorter = (types?: string, domain?: string) => {
    if (domain !== 'gun') return 'default'
    switch (types) {
      case 'ap':
        return 'blue'
      case 'he':
        return 'red'
      case 'normal':
      case 'type3':
        return 'yellow'
      case 'sap':
        return 'violet'
      default:
        return 'default'
    }
  }

  return (
    <PortraitFrame
      data-tier={item?.tier}
      data-stroke={strokeSorter(item?.type, item?.domain)}
      className={className}
      style={style}
    >
      <Image
        src={`images/items/${item?.image}.webp`}
        alt='images'
        width={size}
        height={size}
        placeholder={`images/items/${item?.image}_lqip.webp`}
      />
    </PortraitFrame>
  )
}
