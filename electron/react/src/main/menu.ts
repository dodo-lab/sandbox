import {
  app,
  BrowserWindow,
  dialog,
  Menu,
  MenuItemConstructorOptions,
} from 'electron';
import fs from 'fs';
import { Messenger } from './messanger';
import { isMac, macOrOther } from './utils/platform';

export default class MenuBuilder {
  mainWindow: BrowserWindow;

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
  }

  buildMenu(): Menu {
    if (
      process.env.NODE_ENV === 'development' ||
      process.env.DEBUG_PROD === 'true'
    ) {
      this.setupDevelopmentEnvironment();
    }

    const template = this.buildTemplate();

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    return menu;
  }

  setupDevelopmentEnvironment(): void {
    this.mainWindow.webContents.on('context-menu', (_, props) => {
      const { x, y } = props;

      Menu.buildFromTemplate([
        {
          label: 'Inspect element',
          click: () => {
            this.mainWindow.webContents.inspectElement(x, y);
          },
        },
      ]).popup({ window: this.mainWindow });
    });
  }

  buildTemplate(): MenuItemConstructorOptions[] {
    const macMenus: MenuItemConstructorOptions[] = isMac
      ? [
          {
            label: app.name,
            submenu: [
              { role: 'about', label: `${app.name}について` },
              { type: 'separator' },
              { role: 'hide', label: `${app.name}を隠す` },
              { role: 'unhide', label: 'すべて表示' },
              { type: 'separator' },
              { role: 'quit', label: `${app.name}を終了` },
            ],
          },
        ]
      : [];

    return [
      ...macMenus,
      {
        label: MenuBuilder.label('File'),
        submenu: [
          {
            label: MenuBuilder.label('Open'),
            accelerator: macOrOther({
              mac: 'Command+O',
              other: 'Ctrl+O',
            }),
            click: async () => {
              const { canceled, filePaths } = await dialog.showOpenDialog(
                this.mainWindow,
                {
                  filters: [{ name: 'JSON Files', extensions: ['json'] }],
                }
              );
              if (!canceled) {
                try {
                  const data = await fs.promises.readFile(filePaths[0], {
                    encoding: 'utf-8',
                  });

                  Messenger.send('updateData', JSON.parse(data));
                } catch (e) {
                  dialog.showErrorBox(
                    'エラー',
                    'データの読み込みに失敗しました'
                  );
                }
              }
            },
          },
          ...(isMac
            ? []
            : [
                {
                  label: MenuBuilder.label('Close'),
                  accelerator: 'Alt+F4',
                  click: () => {
                    this.mainWindow.close();
                  },
                },
              ]),
        ],
      },
      {
        label: '&View',
        submenu:
          process.env.NODE_ENV === 'development' ||
          process.env.DEBUG_PROD === 'true'
            ? [
                {
                  label: MenuBuilder.label('Reload'),
                  accelerator: macOrOther({
                    mac: 'Command+R',
                    other: 'Ctrl+R',
                  }),
                  click: () => {
                    this.mainWindow.webContents.reload();
                  },
                },
                {
                  label: macOrOther({
                    mac: 'Toggle Full Screen',
                    other: 'Toggle &Full Screen',
                  }),
                  accelerator: macOrOther({
                    mac: 'Ctrl+Command+F',
                    other: 'F11',
                  }),
                  click: () => {
                    this.mainWindow.setFullScreen(
                      !this.mainWindow.isFullScreen()
                    );
                  },
                },
                {
                  label: macOrOther({
                    mac: 'Toggle Developer Tools',
                    other: 'Toggle &Developer Tools',
                  }),
                  accelerator: macOrOther({
                    mac: 'Alt+Command+I',
                    other: 'Alt+Ctrl+I',
                  }),
                  click: () => {
                    this.mainWindow.webContents.toggleDevTools();
                  },
                },
              ]
            : [
                {
                  label: macOrOther({
                    mac: 'Toggle Full Screen',
                    other: 'Toggle &Full Screen',
                  }),
                  accelerator: macOrOther({
                    mac: 'Ctrl+Command+F',
                    other: 'F11',
                  }),
                  click: () => {
                    this.mainWindow.setFullScreen(
                      !this.mainWindow.isFullScreen()
                    );
                  },
                },
              ],
      },
    ];
  }

  private static label(labelName: string): string {
    return isMac ? labelName : `&${labelName}`;
  }
}
