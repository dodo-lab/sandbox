import 'webdriverio';
import 'jest-environment-webdriverio';

jest.setTimeout(1000 * 10);

async function sleep(msec: number) {
  return new Promise(resolve => setTimeout(resolve, msec));
}

describe('main', () => {
  test('test', async () => {
    await browser.saveScreenshot(`./test.png`);

    expect(true).toBeTruthy();
  });
});
