import 'jest-environment-webdriverio';

jest.setTimeout(1000 * 10);

async function sleep(msec: number) {
  return new Promise(resolve => setTimeout(resolve, msec));
}

describe('main', () => {
  test('スクリーンショット', async () => {
    await browser.saveScreenshot(`./screenshot/top.png`);
    expect(true).toBeTruthy();
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
});
