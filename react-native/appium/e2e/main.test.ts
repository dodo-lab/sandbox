import 'jest-environment-webdriverio';

jest.setTimeout(1000 * 10);

async function sleep(msec: number) {
  return new Promise(resolve => setTimeout(resolve, msec));
}

describe('main', () => {
  test('録画開始', async () => {
    browser.startRecordingScreen();
    await sleep(2000);
  });
  test('スクリーンショット', async () => {
    await browser.saveScreenshot(`./screenshot/top.png`);
  });

  test('Basic画面に遷移した後、トップに戻る', async () => {
    const element = await browser.$('~linkList_0');
    await element.waitForDisplayed({timeout: 2000});

    element.click();

    await sleep(1000);
    await browser.saveScreenshot(`./screenshot/basic.png`);

    await browser.back();

    await sleep(1000);
    await browser.saveScreenshot(`./screenshot/basic_to_top.png`);
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

    await sleep(1000);

    await browser.back();

    await sleep(500);
  });
  test('録画終了', async () => {
    await browser.saveRecordingScreen(`./screenshot/recording.mp4`);
  });
});
