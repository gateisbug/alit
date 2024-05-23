import { CategoryTitle, SearchResult } from '@components/(main)'

// TODO: Recoil에서 데이터를 포함하기 시작하면 이곳에서 탐색할 수 있도록 변경할 것
export default function SearchRes(props: { value: string }) {
  const { value } = props

  return (
    <SearchResult>
      <CategoryTitle>Result</CategoryTitle>
      <span>{value}</span>
    </SearchResult>
  )
}
