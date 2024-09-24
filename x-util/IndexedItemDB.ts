// import { IDBPDatabase, openDB } from 'idb'
//
// import fetchItemData from '@util/fetchJson.ts'
//
// interface IDBItem extends IDBPDatabase {
//   'item-list': ItemInterface
// }
//
// const DATABASE = 'alit-database'
// const ITEMTABLE = 'item-list'
// const VERSION = 1
//
// export default class IndexedItemDB {
//   private static instance: IndexedItemDB | null = null
//
//   private db: IDBPDatabase<IDBItem> | null = null
//
//   public static async getInstance(): Promise<IndexedItemDB> {
//     if (!IndexedItemDB.instance) {
//       IndexedItemDB.instance = new IndexedItemDB()
//       await IndexedItemDB.instance.initialize()
//     }
//     return IndexedItemDB.instance
//   }
//
//   public async getAllData() {
//     if (!this.db) return []
//     const tx = this.db.transaction(ITEMTABLE, 'readonly')
//     const store = tx.objectStore(ITEMTABLE)
//
//     const allItems = (await store.getAll()) as ItemInterface[]
//     await tx.done
//
//     if (allItems.length === 0) {
//       // noinspection UnnecessaryLocalVariableJS
//       const data = await fetchItemData()
//       return data
//     }
//
//     return allItems
//   }
//
//   private async initialize() {
//     this.db = await openDB<IDBItem>(DATABASE, VERSION, {
//       async upgrade(database) {
//         if (!database.objectStoreNames.contains(ITEMTABLE)) {
//           database.createObjectStore(ITEMTABLE, {
//             keyPath: 'index',
//             // keyPath: 'id',
//             // autoIncrement: true,
//           })
//         }
//
//         const data = await fetchItemData()
//
//         const tx = database.transaction(ITEMTABLE, 'readwrite')
//         const store = tx.objectStore(ITEMTABLE)
//
//         data.forEach((item) => {
//           store.put({ ...item }).catch((rej) => {
//             // eslint-disable-next-line no-console
//             console.error(rej)
//           })
//         })
//
//         await tx.done
//       },
//     })
//   }
// }
