export default async function fetchItemData() {
  const response = await fetch('json/all.json')
  return ((await response.json()) as unknown as ItemInterface[]) ?? []
  // const data = await import('../assets/json/all.json')
  // console.log(data)
  // return (data as unknown as ItemInterface[]) ?? []
}
