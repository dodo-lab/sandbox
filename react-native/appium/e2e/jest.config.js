module.exports = {
  testEnvironment: 'jest-environment-webdriverio',
  testEnvironmentOptions: {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
      platformName: 'Android',
      deviceName: 'Android Emulator',
      nativeWebTap: true,
      app: './android/app/build/outputs/apk/release/app-release.apk',
    },
  },
  testMatch: ['**/e2e/*.test.ts'],
};
