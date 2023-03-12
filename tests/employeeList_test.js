const config = require("../framework/config/credentials");

Feature('employeeList');

const firstName = 'Aizhan';
const lastName = 'Testing';

Before(({loginPage, addEmployeePage, employeeListPage}) => {
    loginPage.visit();
    loginPage.fillUsername(config.LOGIN);
    loginPage.fillPassword(config.PASSWORD);
    loginPage.clickLoginButton();
    addEmployeePage.visit();
    addEmployeePage.fillFirstName(firstName);
    addEmployeePage.fillLastName(lastName);
    addEmployeePage.clickSaveButton();
    employeeListPage.visit();
});

Scenario('Поиск работника по имени из списка', ({ I , employeeListPage}) => {
    employeeListPage.fillEmployeeNameForSort(firstName);
    employeeListPage.clickSearchButton();
    I.seeTextEquals(firstName, employeeListPage.employeeNameInSearchResult);
});

Scenario('Переход в детальную информацию по одному работнику из списка', ({ I , employeeListPage, employeeDetailPage}) => {
    employeeListPage.fillEmployeeNameForSort(firstName);
    employeeListPage.clickSearchButton();
    employeeListPage.clickByEmployeeRow();
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
