/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://opensource-demo.orangehrmlive.com',
      show: true,
      browser: 'chromium',
      waitForNavigation: 'networkidle'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: "./pages/Login.js"
  },
  name: 'qajs-2022-11-dostybayeva-codeceptjs'
}
