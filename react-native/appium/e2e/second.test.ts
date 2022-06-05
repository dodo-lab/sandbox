import 'jest-environment-webdriverio';

jest.setTimeout(1000 * 10);

async function sleep(msec: number) {
  return new Promise(resolve => setTimeout(resolve, msec));
}

describe('別ファイルだと、アプリ再起動で実行される', () => {
  test('Basic画面に遷移した後、トップに戻る', async () => {
    const element = await browser.$('~linkList_0');
    await element.waitForDisplayed({timeout: 2000});
    await element.click();

    await sleep(500);
    await browser.back();
    await sleep(500);
  });
});
