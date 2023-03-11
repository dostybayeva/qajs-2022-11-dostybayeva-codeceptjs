require('dotenv').config();

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://opensource-demo.orangehrmlive.com',
      show: true,
      browser: 'chromium',
      restart: 'context',
      waitForNavigation: 'networkidle',
      waitForTimeout: 20000,
      getPageTimeout: 20000,
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: "./pages/Login.js",
    addEmployeePage: "./pages/AddEmployee.js",
    employeeListPage: "./pages/EmployeeList.js",
    credentials: {
      LOGIN: process.env.LOGIN,
      PASSWORD: process.env.PASSWORD
    },
  },
  name: 'qajs-2022-11-dostybayeva-codeceptjs',
}
