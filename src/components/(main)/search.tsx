import Image from 'next/image';
import Link from 'next/link';

import { ScrollView } from '@ui';

import { SearchBar, SearchScreen } from './search-sc';

const categories = [
  {
    title: 'ALL',
    items: [{ name: 'All Items', path: '/item' }]
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
    ]
  },
  {
    title: 'Aircrafts',
    items: [
      { name: 'All', path: '/item/aircraft' },
      { name: 'Fighter', path: '/item/aircraft?filter=ff' },
      { name: 'Dive Bomber', path: '/item/aircraft?filter=db' },
      { name: 'Torpedo Bomber', path: '/item/aircraft?filter=tb' },
      { name: 'Seaplane', path: '/item/aircraft?filter=sp' },
    ]
  },
  {
    title: 'Torpedoes',
    items: [
      { name: 'All', path: '/item/torpedo' },
      { name: 'Surface Torpedo', path: '/item/torpedo?filter=sf' },
      { name: 'Submarine`s Torpedo', path: '/item/torpedo?filter=ss' },
      { name: 'Missiles', path: '/item/torpedo?filter=gg' },
    ]
  },
  {
    title: 'Anti-air Guns',
    items: [
      { name: 'All', path: '/item/antiair' },
      { name: 'Normal', path: '/item/antiair?filter=no' },
      { name: 'Fuse', path: '/item/antiair?filter=fu' },
    ]
  },
  {
    title: 'Accessories',
    items: [
      { name: 'All', path: '/item/accessory' },
      { name: 'Frontline Accessory', path: '/item/accessory?filter=front' },
      { name: 'Backline Accessory', path: '/item/accessory?filter=back' },
      { name: 'Special Accessory', path: '/item/accessory?filter=speical' },  // Note: Corrected the typo in 'special'
    ]
  },
  {
    title: 'Specials',
    items: [
      { name: 'All', path: '/item/special' }
    ]
  }
];

export function SearchLinks() {
  return (
    <ScrollView>
      <SearchScreen>
        {categories.map(category => (
          <div className='category' key={category.title}>
            <div className='category-title'>{category.title}</div>
            {category.items.map(item => (
              <Link key={item.name} href={item.path} className='search-item'>
                {item.name}
              </Link>
            ))}
          </div>
        ))}
      </SearchScreen>
    </ScrollView>
  )
}

export function SearchInput() {
  return (
    <SearchBar>
      <div className='search-form'>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor='search-input'>
          <Image width={24} height={24} src='/assets/search.svg' alt='검색' />
        </label>
        <input id='search-input'
               autoComplete='off'
               autoCorrect='off'
               autoCapitalize='off'
               enterKeyHint='search'
               spellCheck='false'
               placeholder='What are you looking for?'
               type='search'
               maxLength={64}
        />
      </div>
      <button className='search-cancel' type="reset">Cancel</button>
    </SearchBar>
  )
}