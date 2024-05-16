import { ReactNode } from 'react'

async function fetchAllItem() {
  try {
    const JSON: ItemJson =
      (import('@/datum/item/all.json') as unknown as ItemJson) ?? []
    return JSON
  } catch (error) {
    // console.error('Error:', error)
    throw new Error('Failed to fetch item')
  }
}

interface Props {
  children: (items: ItemJson) => ReactNode
}

export default async function AllData({ children }: Props) {
  const JSON = await fetchAllItem()

  return <div className='dynamic-item-datum'>{children(JSON)}</div>
}
