const config = require("../framework/config/credentials");

Feature('employeeDetail');

const firstName = 'Aizhan';
const lastName = 'Testing';
const newFirstName = 'AijanQA';
const newLastName = 'Engineer';

Before(({loginPage, addEmployeePage, employeeDetailPage}) => {
    loginPage.visit();
    loginPage.fillUsername(config.LOGIN);
    loginPage.fillPassword(config.PASSWORD);
    loginPage.clickLoginButton();
    addEmployeePage.visit();
    addEmployeePage.fillFirstName(firstName);
    addEmployeePage.fillLastName(lastName);
    addEmployeePage.clickSaveButton();
    employeeDetailPage.visit();
});

Scenario('Редактирование имени и фамилии работника', ({ I, employeeDetailPage}) => {
    employeeDetailPage.clearFirstNameField();
    employeeDetailPage.fillFirstName(newFirstName);
    employeeDetailPage.clearLastNameField();
    employeeDetailPage.fillLastName(newLastName);
    employeeDetailPage.clickSaveButton();
    I.refreshPage();
    I.seeTextEquals(`${newFirstName} ${newLastName}`, employeeDetailPage.employeeName);
});

// Удаляем созданных пользователей
After(({employeeListPage}) => {
    employeeListPage.visit();
    employeeListPage.fillEmployeeNameForSort(newFirstName);
    employeeListPage.clickSearchButton();
    employeeListPage.clickChooseAll();
    employeeListPage.clickEmployeeDeleteButton();
    employeeListPage.clickDeleteButtonInPopup();
});
