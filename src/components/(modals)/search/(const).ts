const CATEGORY = Object.freeze([
  {
    label: '전체',
    items: [
      {
        label: '전체 아이템',
        link: '/item',
      },
    ],
  },
  {
    label: '함포',
    items: [
      {
        label: '전체',
        link: '/item?category=gun',
      },
      {
        label: '구축포(부포)',
        link: '/item?category=gun&division=dd',
      },
      {
        label: '경순포(부포)',
        link: '/item?category=gun&division=cl',
      },
      {
        label: '중순포',
        link: '/item?category=gun&division=ca',
      },
      {
        label: '전함포',
        link: '/item?category=gun&division=bb',
      },
      {
        label: '대순포',
        link: '/item?category=gun&division=cb',
      },
    ],
  },
  {
    label: '항공기',
    items: [
      {
        label: '전체',
        link: '/item?category=aircraft',
      },
      {
        label: '전투기',
        link: '/item?category=aircraft&division=fighter',
      },
      {
        label: '폭격기',
        link: '/item?category=aircraft&division=bomber',
      },
      {
        label: '뇌격기',
        link: '/item?category=aircraft&division=torpedo-bomber',
      },
      {
        label: '수상기',
        link: '/item?category=aircraft&division=seaplane',
      },
    ],
  },
  {
    label: '어뢰',
    items: [
      {
        label: '전체',
        link: '/item?category=torpedo',
      },
      {
        label: '수면어뢰',
        link: '/item?category=torpedo&division=surface',
      },
      {
        label: '잠수어뢰',
        link: '/item?category=torpedo&division=submarine',
      },
      {
        label: '미사일',
        link: '/item?category=torpedo&division=missile',
      },
    ],
  },
  {
    label: '대공포',
    items: [
      {
        label: '전체',
        link: '/item?category=antiair',
      },
      {
        label: '일반',
        link: '/item?category=antiair&division=normal',
      },
      {
        label: '시한신관',
        link: '/item?category=antiair&division=fuse',
      },
    ],
  },
  {
    label: '설비',
    items: [
      {
        label: '전체',
        link: '/item?category=accessory',
      },
      {
        label: '전열',
        link: '/item?category=accessory&division=frontline',
      },
      {
        label: '후열',
        link: '/item?category=accessory&division=backline',
      },
      {
        label: '특수',
        link: '/item?category=accessory&division=signiture',
      },
    ],
  },
  {
    label: '특수',
    items: [
      {
        label: '전체',
        link: '/item?category=special',
      },
      {
        label: '공용',
        link: '/item?category=special&division=normal',
      },
      {
        label: '전용',
        link: '/item?category=special&division=signiture',
      },
    ],
  },
])

export default CATEGORY
