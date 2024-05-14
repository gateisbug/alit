import { CategoryTitle, SearchResult } from '@components/(main)'

interface ResultProps {
  value: string
}

// TODO: Global State에서 데이터를 포함하기 시작하면 이곳에서 탐색할 수 있도록 변경할 것
export default function SearchRes({ value }: ResultProps) {
  return (
    <SearchResult>
      <CategoryTitle>Result</CategoryTitle>
      <span>{value}</span>
    </SearchResult>
  )
}
