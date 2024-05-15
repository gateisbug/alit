export async function fetchAllItem() {
  try {
    const JSON: ItemJson = (import('./all.json') as unknown as ItemJson) ?? []
    return JSON
  } catch (error) {
    // console.error('Error:', error)
    throw new Error('Failed to fetch item')
  }
}
