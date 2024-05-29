import Image from '@components/common/Image'
import { classSorter, domainSorter, typeSorter } from '@util/item/const'
import { Fragment } from 'react'
import styled from 'styled-components'

const BreadcrumbsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.75rem; /* 12 */
`

export default function Breadcrumbs({ item }: { item?: ItemInterface }) {
  const breadcrumsOption = (() => {
    const domain = domainSorter(item?.domain)
    const classes = classSorter(item)
    const types = typeSorter(item)

    const result = []
    if (domain.length > 0) result.push(domain)
    if (classes.length > 0) result.push(classes)
    if (types.length > 0) result.push(types)

    return result
  })()

  return (
    <BreadcrumbsContainer>
      {breadcrumsOption.map((v, i, a) => (
        <Fragment key={v}>
          <span>{v}</span>
          {a.length - 1 !== i && (
            <Image
              src='assets/arrow.svg'
              alt='seperator'
              width={14}
              height={14}
            />
          )}
        </Fragment>
      ))}
    </BreadcrumbsContainer>
  )
}
