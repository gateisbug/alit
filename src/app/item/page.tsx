import { useLoaderData } from 'react-router-dom'

import ItemTable from './controller'

export default function ItemPage() {
  const data = useLoaderData() as ItemInterface[]

  return <ItemTable data={data} />
}
