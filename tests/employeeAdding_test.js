const { chromium } = require('playwright');

Feature('employeeAdding');

const firstName = 'Aizhan';
const lastName = 'Testing';
const usernameForLogin = 'aizhan';
const passwordForLogin = 'Aizhan123*';

Before(({loginPage, addEmployeePage, credentials}) => {
    loginPage.visit();
    loginPage.fillUsername(credentials.LOGIN);
    loginPage.fillPassword(credentials.PASSWORD);
    loginPage.clickLoginButton();
    addEmployeePage.visit();
});

Scenario('Добавление нового работника', ({ I , addEmployeePage, employeeListPage}) => {
    addEmployeePage.fillFirstName(firstName);
    addEmployeePage.fillLastName(lastName);
    addEmployeePage.clickSaveButton();
    I.seeInCurrentUrl(employeeListPage.employeeDetailPath);
    I.seeTextEquals(`${firstName} ${lastName}`, employeeListPage.employeeName);
});

Scenario('Добавление нового работника с данными логина', ({ I , addEmployeePage, employeeListPage}) => {
    addEmployeePage.fillFirstName(firstName);
    addEmployeePage.fillLastName(lastName);
    addEmployeePage.clickLoginDetailsCheckBox();
    addEmployeePage.fillUsernameForLoginDetail(usernameForLogin);
    addEmployeePage.fillPasswordForLoginDetail(passwordForLogin);
    addEmployeePage.fillConfirmPasswordForLoginDetail(passwordForLogin);
    addEmployeePage.clickSaveButton();
    I.seeInCurrentUrl(employeeListPage.employeeDetailPath);
    I.seeTextEquals(`${firstName} ${lastName}`, employeeListPage.employeeName);
});

Scenario('Отображение ошибки при создании пустого работника', ({ I , addEmployeePage}) => {
    addEmployeePage.clickSaveButton();
    I.seeTextEquals('Required', addEmployeePage.emptyFirstNameFieldError());
    I.seeTextEquals('Required', addEmployeePage.emptyLastNameFieldError());
});
