async function fetchItemJson() {
  try {
    const JSON: ItemJson =
      (import('@util/item/all.json') as unknown as ItemJson) ?? []
    return JSON
  } catch (error) {
    throw new Error('Failed to fetch item')
  }
}

export default fetchItemJson
