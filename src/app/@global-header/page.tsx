import { useMediaQuery } from 'react-responsive'

import { Header, Links, SearchArea } from '@components/@global-header/styled.ts'

import {
  Search,
  ArcaLiveLink,
  GithubLink,
  Notification,
  Logo,
  Filter,
} from '@app/@global-header/(interaction)/index.ts'

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
            <ArcaLiveLink />
            <GithubLink />
          </Links>
        )}
      </div>
    </Header>
  )
}
