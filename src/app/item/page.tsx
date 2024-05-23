'use server'

import ItemData from '@/datum/item/all-data'
import ItemTable from '@app/item/table/table'

export default async function ItemPage() {
  return <ItemData>{(data) => <ItemTable data={data} />}</ItemData>
}
