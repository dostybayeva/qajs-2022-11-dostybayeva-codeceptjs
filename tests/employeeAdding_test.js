const config = require("../framework/config/credentials");

Feature('employeeAdding');

const firstName = 'Aizhan';
const middleName = 'Automation';
const lastName = 'Testing';
const usernameForLogin = 'aizhan';
const passwordForLogin = 'Aizhan123*';

Before(({loginPage, addEmployeePage}) => {
    loginPage.visit();
    loginPage.fillUsername(config.LOGIN);
    loginPage.fillPassword(config.PASSWORD);
    loginPage.clickLoginButton();
    addEmployeePage.visit();
});

Scenario('Добавление нового работника с неполным именем', ({ I , addEmployeePage, employeeDetailPage}) => {
    addEmployeePage.fillFirstName(firstName);
    addEmployeePage.fillLastName(lastName);
    addEmployeePage.clickSaveButton();
    I.seeTextEquals(`${firstName} ${lastName}`, employeeDetailPage.employeeName);
});

Scenario('Добавление нового работника с полным именем', async ({ I , addEmployeePage, employeeDetailPage}) => {
    addEmployeePage.fillFirstName(firstName);
    addEmployeePage.fillMiddleName(middleName);
    addEmployeePage.fillLastName(lastName);
    addEmployeePage.clickSaveButton();

    const actualFirstName = await employeeDetailPage.grabFirstNameValue();
    const actualMiddleName = await employeeDetailPage.grabMiddleNameValue();
    const actualLastName = await employeeDetailPage.grabLastNameValue();

    I.assertEqual(actualFirstName, firstName);
    I.assertEqual(actualMiddleName, middleName);
    I.assertEqual(actualLastName, lastName);
});

Scenario('Добавление нового работника с данными логина', ({ I, addEmployeePage, employeeDetailPage}) => {
    addEmployeePage.fillFirstName(firstName);
    addEmployeePage.fillLastName(lastName);
    addEmployeePage.clickLoginDetailsCheckBox();
    addEmployeePage.fillUsernameForLoginDetail(usernameForLogin);
    addEmployeePage.fillPasswordForLoginDetail(passwordForLogin);
    addEmployeePage.fillConfirmPasswordForLoginDetail(passwordForLogin);
    addEmployeePage.clickSaveButton();
    I.seeTextEquals(`${firstName} ${lastName}`, employeeDetailPage.employeeName);
});

// Удаляем созданных пользователей
After(({employeeListPage}) => {
    employeeListPage.visit();
    employeeListPage.fillEmployeeNameForSort(firstName);
    employeeListPage.clickSearchButton();
    employeeListPage.clickChooseAll();
    employeeListPage.clickEmployeeDeleteButton();
    employeeListPage.clickDeleteButtonInPopup();
});
