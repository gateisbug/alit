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
      { name: 'Fighter', path: '/item/aircraft?filter=fighter' },
      { name: 'Dive Bomber', path: '/item/aircraft?filter=bomber' },
      { name: 'Torpedo Bomber', path: '/item/aircraft?filter=torpedo-bomber' },
      { name: 'Seaplane', path: '/item/aircraft?filter=seaplane' },
    ],
  },
  {
    title: 'Torpedoes',
    items: [
      { name: 'All', path: '/item/torpedo' },
      { name: 'Surface Torpedo', path: '/item/torpedo?filter=surface' },
      { name: 'Submarine`s Torpedo', path: '/item/torpedo?filter=submarine' },
      { name: 'Missiles', path: '/item/torpedo?filter=missile' },
    ],
  },
  {
    title: 'Anti-air Guns',
    items: [
      { name: 'All', path: '/item/antiair' },
      { name: 'Normal', path: '/item/antiair?filter=normal' },
      { name: 'Fuse', path: '/item/antiair?filter=fuse' },
    ],
  },
  {
    title: 'Accessories',
    items: [
      { name: 'All', path: '/item/accessory' },
      { name: 'Frontline Accessory', path: '/item/accessory?filter=frontline' },
      { name: 'Backline Accessory', path: '/item/accessory?filter=backline' },
      { name: 'Special Accessory', path: '/item/accessory?filter=signiture' }, // Note: Corrected the typo in 'special'
    ],
  },
  {
    title: 'Specials',
    items: [{ name: 'All', path: '/item/special' }],
  },
]

export default categories
