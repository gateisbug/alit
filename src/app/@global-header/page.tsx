import { useMediaQuery } from 'react-responsive'

import {
  Search,
  ArcaLiveLink,
  GithubLink,
  Notification,
  Logo,
  Filter,
  Conversion,
} from '@app/@global-header/(interaction)/index.ts'
import { Header, Links, SearchArea } from '@components/@global-header/styled.ts'

export default function GlobalHeader() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <Header>
      <div className='wrap flex jc-sb ai-c bb'>
        <Logo />

        <SearchArea>
          <Search />
        </SearchArea>

        {!isTabletOrMobile && (
          <Links>
            <Filter />
            <Notification />
            <Conversion />
            <ArcaLiveLink />
            <GithubLink />
          </Links>
        )}
      </div>
    </Header>
  )
}
