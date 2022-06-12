import { Ipc, IpcKey } from 'common/ipc';
import { BrowserWindow } from 'electron';

export abstract class Messenger {
  private static mainWindow: BrowserWindow | null = null;

  static init(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
  }

  static send<T extends IpcKey>(key: T, ...args: Parameters<Ipc[T]>) {
    this.mainWindow?.webContents.send(key, args);
  }
}
