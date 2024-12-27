import { BorderBox } from '@components/(modals)/chara/styled.ts'

interface Props {
  chara: CharacterInterface
}

export function CharaNatCate({ chara }: Props) {
  const categoryConverter = (category?: string[]) =>
    category
      ?.map((v) => {
        switch (v) {
          case '구축':
            return '구축함'
          case '미구':
            return '미사일 구축함'
          case '경순':
            return '경순양함'
          case '중순':
            return '중순양함'
          case '대순':
            return '대형순양함'
          case '모니터':
            return '모니터함'
          case '전함':
            return '전함'
          case '항전':
            return '항공전함'
          case '순전':
            return '순양전함'
          case '항모':
            return '항공모함'
          case '경항모':
            return '경항공모함'
          case '잠수':
            return '잠수함'
          case '잠항':
            return '잠수항모'
          default:
            return v
        }
      })
      .join(' → ')

  return (
    <p className='b1 fcw'>
      {chara?.nation}, {categoryConverter(chara?.category)}
    </p>
  )
}

export function CharaStat({ chara }: Props) {
  const get = (index: number) => {
    if (!chara || !chara.stat || chara.stat.length < 2) return '준비 중'
    return chara.stat[index].replace(/\|/g, ', ').replace(/:/g, ': ')
  }

  return (
    <BorderBox>
      <h3 className='fcs b1 fwr'>함대 스탯</h3>
      <div className='box-data'>
        {['획득 시', 'Lv 120'].map((v, i) => (
          <div key={`stat-${v}`} className='data-row'>
            <span className='data-head'>{v}</span>
            <span className='fcs fwm'>{get(i)}</span>
          </div>
        ))}
      </div>
    </BorderBox>
  )
}

export function CharaFleet({ chara }: Props) {
  const get = (index: number) => {
    if (!chara || !chara.fleet || chara.fleet.length < 3) return '준비 중'
    return chara.fleet[index]
  }

  return (
    <BorderBox>
      <h3 className='fcs b1 fwr'>기술 점수</h3>
      <div className='box-data'>
        {['획득 시', '★3', 'Lv 120'].map((v, i) => (
          <div key={`fleet-${v}`} className='data-row'>
            <span className='data-head'>{v}</span>
            <span className='fcs fwm'>+{get(i)}</span>
          </div>
        ))}
      </div>
    </BorderBox>
  )
}
