import 'jest-environment-webdriverio';
import {ScreenShot} from './screenShot';

jest.setTimeout(1000 * 10);

async function sleep(msec: number) {
  return new Promise(resolve => setTimeout(resolve, msec));
}

const SCREEN_CHANGE_WAIT_MSEC = 2000;

ScreenShot.init();

describe('main', () => {
  test('録画開始', async () => {
    browser.startRecordingScreen();
    await sleep(2000);
  });
  test('スクリーンショット', async () => {
    await ScreenShot.save('top.png');
  });

  test('Basic画面に遷移した後、トップに戻る', async () => {
    const element = await browser.$('~linkList_0');
    await element.waitForDisplayed({timeout: 2000});

    element.click();

    await sleep(SCREEN_CHANGE_WAIT_MSEC);
    await ScreenShot.save('basic.png');

    await browser.back();

    await sleep(SCREEN_CHANGE_WAIT_MSEC);
    await ScreenShot.save('basic_to_top.png');
  });

  test('座標指定でBasic画面に遷移した後、トップに戻る', async () => {
    const element = await browser.$('~linkList_0');
    await element.waitForDisplayed({timeout: 2000});

    const location = await element.getElementLocation(element.elementId);
    const locationInView = await element.getElementLocationInView(element.elementId);
    const size = await element.getSize();
    const rect = await element.getElementRect(element.elementId);
    console.log('location', location);
    console.log('locationInView', locationInView);
    console.log('size', size);
    console.log('rect', rect);
    browser.touchAction({
      action: 'tap',
      x: location.x + size.width * 0.5,
      y: location.y + size.height * 0.5,
      // Rectでも良さそう
      // x: rect.x + rect.width * 0.5,
      // y: rect.y + rect.height * 0.5,
    });

    await sleep(SCREEN_CHANGE_WAIT_MSEC);
    await browser.back();
    await sleep(SCREEN_CHANGE_WAIT_MSEC);
  });
  test('録画終了', async () => {
    await browser.saveRecordingScreen(`./screenshot/recording.mp4`);
  });
  test('イメージの差分チェック', async () => {
    const ret = await ScreenShot.isDiff();
    expect(ret).toBeFalsy();
  });
});

describe('describeを分けてもアプリ再起動はせず、逐次処理する', () => {
  test('座標指定でTouchables画面に遷移した後、トップに戻る', async () => {
    const element = await browser.$('~linkList_1');
    await element.waitForDisplayed({timeout: 2000});

    element.click();

    await sleep(SCREEN_CHANGE_WAIT_MSEC);
    await browser.back();
    await sleep(SCREEN_CHANGE_WAIT_MSEC);
  });
});
