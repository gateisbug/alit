import { CategoryTitle, SearchScreen, SearchItem } from '@components/(main)'

import categories from './category'

export default function SearchLinks() {
  return (
    <SearchScreen>
      {categories.map((category) => (
        <div className='category' key={category.title}>
          <CategoryTitle>{category.title}</CategoryTitle>
          {category.items.map((item) => (
            <SearchItem key={item.name} to={item.path}>
              {item.name}
            </SearchItem>
          ))}
        </div>
      ))}
    </SearchScreen>
  )
}
