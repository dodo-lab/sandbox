import { BrowserWindowConstructorOptions, Rectangle } from 'electron';
import ElectronStore from 'electron-store';

type Config = {
  windowRect: Rectangle;
};

const store = new ElectronStore<Config>();

const loadWindowRect = (): BrowserWindowConstructorOptions => {
  if (store.has('windowRect')) {
    const rect = store.get('windowRect');
    return rect;
  }

  return {
    width: 1024,
    height: 728,
  };
};

const saveWindowRect = (rect: Config['windowRect']) => {
  store.set('windowRect', rect);
};

export { loadWindowRect, saveWindowRect };
