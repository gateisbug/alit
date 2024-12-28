/**
 * @deprecated
 */
export default class IndexedItemDB {
  public static getInstance() /*: Promise<IndexedItemDB> */ {
    indexedDB.deleteDatabase('alit-database')
  }
}
