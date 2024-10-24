import { IDBPDatabase, openDB } from 'idb'

import fetchItemData from '@util/fetchJson.ts'

interface IDBItem extends IDBPDatabase {
  'item-list': ItemInterface
}

const DATABASE = 'alit-database'
const ITEMTABLE = 'item-list'
const VERSION = 4 /* @TODO: 버전업 시 수정 */
// const PREV_VERSION = 3

export default class IndexedItemDB {
  private static instance: IndexedItemDB | null = null

  private db: IDBPDatabase<IDBItem> | null = null

  public static async getInstance(): Promise<IndexedItemDB> {
    if (!IndexedItemDB.instance) {
      IndexedItemDB.instance = new IndexedItemDB()
      await IndexedItemDB.instance.initialize()
    }
    return IndexedItemDB.instance
  }

  public async getAllData() {
    const getFromJSON = async () => {
      // noinspection UnnecessaryLocalVariableJS
      const data = await fetchItemData()
      return data
    }

    if (!this.db) return getFromJSON()

    const tx = this.db.transaction(ITEMTABLE, 'readonly')
    const store = tx.objectStore(ITEMTABLE)

    const allItems = (await store.getAll()) as ItemInterface[]
    await tx.done

    if (allItems.length === 0) {
      return getFromJSON()
    }

    return allItems
  }

  private async initialize() {
    this.db = await openDB<IDBItem>(DATABASE, VERSION, {
      async upgrade(database) {
        if (!database.objectStoreNames.contains(ITEMTABLE)) {
          database.createObjectStore(ITEMTABLE, {
            keyPath: 'no',
          })
        }

        const data = await fetchItemData()

        const tx = database.transaction(ITEMTABLE, 'readwrite')
        const store = tx.objectStore(ITEMTABLE)

        data.forEach((item) => {
          store.put({ ...item }).catch((rej) => {
            throw new Error(rej)
          })
        })

        await tx.done
      },
    })
  }
}
