export default async function fetchItemData() {
  const response = await fetch('json/all.json')
  return ((await response.json()) as unknown as ItemInterface[]) ?? []
}
