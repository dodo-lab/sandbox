import 'jest-environment-webdriverio';
import {PNG} from 'pngjs';
import pixelmatch from 'pixelmatch';
import fs from 'fs';
import sharp from 'sharp';

type SystemBars = {
  statusBar: {visible: boolean; x: number; y: number; width: number; height: number};
  navigationBar: {visible: boolean; x: number; y: number; width: number; height: number};
};

const BASE_SCREENSHOT_PATH = './screenshot';
const ACCEPT_SCREENSHOT_PATH = `${BASE_SCREENSHOT_PATH}/accept`;
const NEW_SCREENSHOT_PATH = `${BASE_SCREENSHOT_PATH}/new`;
const DIFF_SCREENSHOT_PATH = `${BASE_SCREENSHOT_PATH}/diff`;

export abstract class ScreenShot {
  private static files: string[] = [];

  static async save(fileName: string) {
    this.files.push(fileName);

    const tmpFilePath = `${NEW_SCREENSHOT_PATH}/_${fileName}`;
    const filePath = `${NEW_SCREENSHOT_PATH}/${fileName}`;
    await browser.saveScreenshot(tmpFilePath);

    const systemBars = (await browser.getSystemBars()) as unknown as SystemBars;
    const image = sharp(tmpFilePath);
    const meta = await image.metadata();
    if (meta.width && meta.height) {
      await image
        .extract({
          top: systemBars.statusBar.height,
          left: 0,
          width: meta.width,
          height: meta.height - systemBars.statusBar.height - systemBars.navigationBar.height,
        })
        .toFile(filePath);

      fs.rmSync(tmpFilePath);
    }
  }

  static async isDiff() {
    let isDiff = false;

    for (const file of this.files) {
      const acceptData = PNG.sync.read(fs.readFileSync(`${ACCEPT_SCREENSHOT_PATH}/${file}`));
      const newData = PNG.sync.read(fs.readFileSync(`${NEW_SCREENSHOT_PATH}/${file}`));
      const {width, height} = newData;
      const diff = new PNG({width, height});

      const ret = pixelmatch(acceptData.data, newData.data, diff.data, width, height, {threshold: 0.1});
      if (ret !== 0) {
        isDiff = true;

        await sharp(diff.data, {
          raw: {
            width,
            height,
            channels: 4,
          },
        }).toFile(`${DIFF_SCREENSHOT_PATH}/${file}`);
      }
    }

    return isDiff;
  }
}
