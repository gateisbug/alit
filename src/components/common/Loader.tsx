import { CircularProgress } from '@ui'
import { LegacyRef } from 'react'

interface Props {
  global?: boolean
  ref?: LegacyRef<HTMLDivElement>
}

export default function Loader({ global, ref }: Props) {
  return (
    <div className={global ? 'global-loader' : 'loader'} ref={ref}>
      <CircularProgress />
    </div>
  )
}
