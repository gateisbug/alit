import {
  FilterItem,
  FilterList,
  ModalSection,
  SectionHeader,
} from '@components/(modals)/filter/styled.tsx'

interface Props<T> {
  header: string
  state: T
  items: readonly { label: string; value: string }[]
  onClickAll: () => void
  onClickItem: (value: string) => void
}

export default function Section<T extends string | string[]>({
  header,
  state,
  items,
  onClickAll,
  onClickItem,
}: Props<T>) {
  return (
    <ModalSection>
      <SectionHeader>{header}</SectionHeader>
      <FilterList>
        <FilterItem data-active={!state.length} onClick={onClickAll}>
          전체
        </FilterItem>
        {items?.map((v) => (
          <FilterItem
            key={`${v.label}+${v.value}`}
            data-active={
              typeof state === 'string'
                ? state === v.value
                : state.includes(v.value)
            }
            onClick={() => {
              onClickItem(v.value)
            }}
          >
            {v.label}
          </FilterItem>
        ))}
      </FilterList>
    </ModalSection>
  )
}
