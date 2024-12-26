import Portrait from '@components/(common)/portrait.tsx'
import highlightText from '@util/highlightText.tsx'

const headerOptions: OptionType<keyof CharacterInterface>[] = [
  {
    label: '아이콘',
    value: 'image',
  },
  {
    label: '함선명',
    value: 'name',
  },
  {
    label: '스탯',
    value: 'stat',
  },
  {
    label: '기술점수',
    value: 'fleet',
  },
  {
    label: '국가',
    value: 'nation',
  },
  {
    label: '구분',
    value: 'category',
  },
  {
    label: '스킬 유형',
    value: 'tag',
  },
]

export const headers = Object.freeze(headerOptions)

function img(chara: CharacterInterface) {
  const tier = (chara?.rarity ?? ['SSR'])[0]

  return (
    <Portrait
      path={`images/character/${chara?.image}_x72.webp`}
      lqip={`images/character/${chara?.image}_lqip.webp`}
      width={72}
      height={96}
      tier={tier}
    />
  )
}

function name(chara: CharacterInterface, keyword?: string) {
  const { name: n = '' } = chara

  if (keyword) return highlightText(n, keyword)
  return n
}

function stat(chara: CharacterInterface) {
  if (!chara?.stat || !chara.stat.length) return ''

  const [getTarget, getStat] = chara.stat[0].split(':')
  const [lv120Target, lv120Stat] = chara.stat[1].split(':')
  const target =
    getTarget === lv120Target
      ? getTarget.replace(/\|/g, ', ')
      : `${getTarget}→${lv120Target}`.replace(/\|/g, ', ')

  return (
    <>
      <p className='fwm'>{target}</p>
      <p className='fcs fws'>
        <span className='fc fwr'>획득: </span>
        {getStat}
      </p>
      <p className='fcs fws'>
        <span className='fc fwr'>lv120: </span>
        {lv120Stat}
      </p>
    </>
  )
}

function fleet(chara: CharacterInterface) {
  const get = (chara.fleet ?? [''])[0]
  const star3 = (chara.fleet ?? [''])[0]
  const lv120 = (chara.fleet ?? [''])[0]

  return (
    <>
      <p className='fc'>
        획득: <span className='fws fcs'>+{get}</span>
      </p>
      <p className='fc'>
        ★3: <span className='fws fcs'>+{star3}</span>
      </p>
      <p className='fc'>
        lv120: <span className='fws fcs'>+{lv120}</span>
      </p>
    </>
  )
}
function nation(chara: CharacterInterface) {
  return chara.nation
}
function category(chara: CharacterInterface) {
  return chara.category
}
function tag(/* chara: CharacterInterface */) {
  return <p className='fcw'>준비 중</p>
}

export const render = Object.freeze({
  img,
  name,
  stat,
  fleet,
  nation,
  category,
  tag,
})
