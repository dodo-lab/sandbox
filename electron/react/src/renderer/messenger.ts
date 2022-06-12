import { Ipc, IpcKey } from 'common/ipc';

export abstract class Messenger {
  static on<T extends IpcKey>(key: T, callback: Ipc[T]) {
    window.electron.ipcRenderer.on(key, callback);
  }
}
