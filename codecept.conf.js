require('dotenv').config();

exports.config = {
  tests: './tests/*_test.js',
  output: './framework/output',
  helpers: {
    Playwright: {
      url: process.env.BASE_URL,
      show: false,
      browser: 'chromium',
      restart: 'context',
      waitForNavigation: 'networkidle',
      waitForTimeout: 50000,
      getPageTimeout: 50000,
    },
    ChaiWrapper: {
      require: 'codeceptjs-chai',
    },
  },
  include: {
    I: './steps_file.js',
    loginPage: "./framework/pages/Login.js",
    addEmployeePage: "./framework/pages/AddEmployee.js",
    employeeListPage: "./framework/pages/EmployeeList.js",
    employeeDetailPage: "./framework/pages/EmployeeDetail.js",
    employeeElements: "./framework/elements/Employee.js"
  },
  name: 'qajs-2022-11-dostybayeva-codeceptjs',
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy'
    }
  }
}
