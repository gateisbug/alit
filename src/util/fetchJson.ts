export default async function fetchItemData() {
  const response = await fetch('json/item.json')
  return ((await response.json()) as unknown as ItemInterface[]) ?? []
}
