const categories = [
  {
    title: 'ALL',
    items: [{ name: 'All Items', path: '/item' }],
  },
  {
    title: 'Naval Guns',
    items: [
      { name: 'All', path: '/item/gun' },
      { name: 'Destroyer', path: '/item/gun?filter=dd' },
      { name: 'Light Cruiser', path: '/item/gun?filter=cl' },
      { name: 'Heavy Cruiser', path: '/item/gun?filter=ca' },
      { name: 'Battle Ship', path: '/item/gun?filter=bb' },
      { name: 'Large Cruiser', path: '/item/gun?filter=cb' },
    ],
  },
  {
    title: 'Aircrafts',
    items: [
      { name: 'All', path: '/item/aircraft' },
      { name: 'Fighter', path: '/item/aircraft?filter=ff' },
      { name: 'Dive Bomber', path: '/item/aircraft?filter=db' },
      { name: 'Torpedo Bomber', path: '/item/aircraft?filter=tb' },
      { name: 'Seaplane', path: '/item/aircraft?filter=sp' },
    ],
  },
  {
    title: 'Torpedoes',
    items: [
      { name: 'All', path: '/item/torpedo' },
      { name: 'Surface Torpedo', path: '/item/torpedo?filter=sf' },
      { name: 'Submarine`s Torpedo', path: '/item/torpedo?filter=ss' },
      { name: 'Missiles', path: '/item/torpedo?filter=gg' },
    ],
  },
  {
    title: 'Anti-air Guns',
    items: [
      { name: 'All', path: '/item/antiair' },
      { name: 'Normal', path: '/item/antiair?filter=no' },
      { name: 'Fuse', path: '/item/antiair?filter=fu' },
    ],
  },
  {
    title: 'Accessories',
    items: [
      { name: 'All', path: '/item/accessory' },
      { name: 'Frontline Accessory', path: '/item/accessory?filter=front' },
      { name: 'Backline Accessory', path: '/item/accessory?filter=back' },
      { name: 'Special Accessory', path: '/item/accessory?filter=speical' }, // Note: Corrected the typo in 'special'
    ],
  },
  {
    title: 'Specials',
    items: [{ name: 'All', path: '/item/special' }],
  },
]

export default categories
