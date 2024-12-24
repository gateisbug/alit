import isNil from 'lodash-es/isNil'

export default function highlightText(text: string, search?: string | null) {
  if (isNil(search)) return text

  const parts = text.split(new RegExp(`(${search})`, 'gi'))
  return (
    <>
      {parts.map((part, index) =>
        part.includes(search) ? (
          // eslint-disable-next-line react/no-array-index-key
          <mark key={`${text}_${part}_${index}`}>{part}</mark>
        ) : (
          part
        ),
      )}
    </>
  )
}
