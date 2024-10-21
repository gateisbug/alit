// noinspection CssUnusedSymbol

import { Fragment, ReactNode } from 'react'
import styled from 'styled-components'

import IconArrow from '@assets/icons/icon-arrow.tsx'
import Tooltip from '@components/(common)/tooltip.tsx'

interface BreadcrumbsProps {
  $items: Array<string | undefined | null>
}
export const Breadcrumbs = styled.div.attrs<BreadcrumbsProps>((props) => ({
  className: 'breadcrumbs flex row ai-c',
  children: props.$items
    .filter((v) => typeof v === 'string')
    .map((v, i, a) => (
      <Fragment key={v}>
        <span>{v}</span>
        {a.length - 1 !== i && <IconArrow />}
      </Fragment>
    )),
}))`
  gap: 12px;

  & svg {
    width: 14px;
    height: 14px;
  }
`

interface ImageCardProps {
  $src: string
  $alt: string
  $body?: ReactNode
}
export const ImageCard = styled.div.attrs<ImageCardProps>((props) => ({
  className: 'image-card pos-r flex row ai-c jc-c ov-h bb',
  children: (
    <>
      <img src={props.$src} alt={props.$alt} />
      <span className='flex column ai-c jc-c pos-a bb'>{props.$body}</span>
    </>
  ),
}))`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  user-select: none;

  &:hover > span {
    opacity: 0;
  }

  & > span {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);

    background-color: #ffffffb2;
    color: #1c2025;
    cursor: default;
  }
`

interface KeyValueProps {
  $key: string
  $value: ReactNode
}
export const KeyValue = styled.div.attrs<KeyValueProps>((props) => ({
  className: 'keyvalue flex column ai-c',
  children: (
    <>
      <div className='key b1 fcw'>{props.$key}</div>
      <div className='value s2 fcs ta-c ai-c'>{props.$value}</div>
    </>
  ),
}))`
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid var(--lc);
  border-radius: 4px;

  & .value {
    display: inline-flex;
    height: 100%;
  }
`

interface AircraftProps {
  $value: string
}

const AircraftStat = styled.span.attrs({
  className: 'pos-r flex column',
})`
  padding: 8px;
  border-radius: 4px;
  z-index: 1;
`

export const Aircraft = styled.div.attrs<AircraftProps>((props) => ({
  children: (() => {
    const [string, damage, ap] = props.$value.split('\\t')
    const [weapon, count] = string.split('*')

    const title = ap ? (
      <AircraftStat>
        <div>대미지: {damage}</div>
        <div>관통: {ap.replace(/\//g, ' / ')}</div>
      </AircraftStat>
    ) : (
      <AircraftStat>대미지: {damage}</AircraftStat>
    )

    return (
      <>
        <Tooltip title={title}>
          <span className='aircraft-target'>{weapon}</span>
        </Tooltip>
        <>&nbsp;× {count}</>
      </>
    )
  })(),
}))`
  .aircraft-target {
    text-decoration: underline;
  }
`
