// noinspection JSUnusedGlobalSymbols

import { IDBPDatabase, openDB } from 'idb';

class IndexedDB {
  private readonly database: string;
  private db: IDBPDatabase | undefined;

  constructor(database: string) {
    this.database = database;
  }

  public async createObjectStore(tableNames: string[], version?: number) {
    try {
      this.db = await openDB(this.database, version ?? 1, {
        blocking(currentVersion, blockedVersion, event) {
          console.log('blocking');
          console.log(currentVersion, blockedVersion, event);
        },
        blocked() {
          console.log('blocked');
        },
        upgrade(db: IDBPDatabase) {
          for (const tableName of tableNames) {
            if (db.objectStoreNames.contains(tableName)) {
              continue;
            }
            db.createObjectStore(tableName);
          }
        },
      });
    } catch (error) {
      return false;
    }
  }

  public async getValue(tableName: string, id: number | string) {
    if (!this.db) return undefined;

    const tx = this.db.transaction(tableName, 'readonly');
    const store = tx.objectStore(tableName);
    return await store.get(id);
  }

  public async getAllValue(tableName: string) {
    if (!this.db) return [];

    const tx = this.db.transaction(tableName, 'readonly');
    const store = tx.objectStore(tableName);
    return await store.getAll();
  }

  public async putValue(
    tableName: string,
    value: object,
    key: string | number,
  ) {
    if (!this.db) return undefined;

    const tx = this.db.transaction(tableName, 'readwrite');
    const store = tx.objectStore(tableName);
    return await store.put(value, key);
  }

  public async deleteValue(tableName: string, id: number | string) {
    if (!this.db) return undefined;

    const tx = this.db.transaction(tableName, 'readwrite');
    const store = tx.objectStore(tableName);
    const result = await store.get(id);
    if (!result) {
      return result;
    }
    await store.delete(id);
    return id;
  }

  public async deleteAllValue(tableName: string) {
    if (!this.db) return;

    const tx = this.db.transaction(tableName, 'readwrite');
    const store = tx.objectStore(tableName);
    if (store) {
      await store.clear();
    }
  }
}

export default IndexedDB;
