import { fetchAllItem } from '@/datum/item/data'

export default async function AllData() {
  const json = await fetchAllItem()

  return <div>{json?.gun.map((v) => <span key={v.name}>{v.name}</span>)}</div>
}
