import { Image } from '@components/(common)'
import { PortraitFrame } from '@components/item'

interface Props {
  item?: ItemInterface
}

export default function Portrait({ item }: Props) {
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
    >
      <Image
        src={`images/items/${item?.image}.webp`}
        alt='images'
        width={48}
        height={48}
        placeholder={`images/items/${item?.image}_lqip.webp`}
      />
    </PortraitFrame>
  )
}
