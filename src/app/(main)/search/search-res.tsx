import { CategoryTitle, SearchResult } from '@components/(main)'

interface ResultProps {
  value: string
}

export default function SearchRes({ value }: ResultProps) {
  return (
    <SearchResult>
      <CategoryTitle>Result</CategoryTitle>
      <span>{value}</span>
    </SearchResult>
  )
}
