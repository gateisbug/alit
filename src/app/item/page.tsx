'use server'

import fetchItemData from '@/datum/item/fetchItemData'

import ItemTable from './controller'

export default async function ItemPage() {
  const data = await fetchItemData()
  return <ItemTable data={data} />
}
