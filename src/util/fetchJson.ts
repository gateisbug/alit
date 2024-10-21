export default async function fetchItemData() {
  try {
    const response = await fetch('json/all.json')
    return ((await response.json()) as unknown as ItemInterface[]) ?? []
  } catch (e) {
    throw new Error('Failed to fetch item')
  }
}
