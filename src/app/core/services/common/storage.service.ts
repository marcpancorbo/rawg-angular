import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  constructor() {}

  set(key: string, value: any, storage: Storage): void {
    storage.setItem(key, value);
  }
  get(key: string): any {
    return localStorage.getItem(key) || sessionStorage.getItem(key);
  }
  update(key: string, value: any) {
    const inLocalStorage = localStorage.getItem(key) !== null;
    if (inLocalStorage) {
      this.set(key, value, localStorage);
    } else {
      this.set(key, value, sessionStorage);
    }
  }
  remove(key: string): void {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  }
}
