const { I, employeeDetailPage, employeeElements } = inject();

module.exports = {
    /**
     * Стр добавления нового работника
     */
    addEmployeeUrl: '/web/index.php/pim/addEmployee',

    /**
     * Форма добавления работника
     */
    employeeForm: '.orangehrm-employee-form',

    /**
     * Чек-бокс для создания данных логина
     */
    createLoginDetailsCheckBox: '.oxd-switch-wrapper',

    /**
     * Локатор инпут-элементов в блоке заполнения данных логина
     */
    inputFieldsInLoginDetails: 'input[autocomplete="off"]',

    /**
     * Переходит на стр добавления нового работника
     */
    visit() {
        I.amOnPage(this.addEmployeeUrl);
        I.waitForVisible(this.employeeForm);
    },

    /**
     * Заполняет имя работника
     *
     * @param firstName
     */
    fillFirstName(firstName) {
        I.waitForVisible(employeeElements.firstNameField);
        I.fillField(employeeElements.firstNameField, firstName);
    },

    /**
     * Заполняет второе имя работника
     *
     * @param middleName
     */
    fillMiddleName(middleName) {
        I.waitForVisible(employeeElements.middleNameField);
        I.fillField(employeeElements.middleNameField, middleName);
    },

    /**
     * Заполняет фамилию работника
     *
     * @param lastName
     */
    fillLastName(lastName) {
        I.waitForVisible(employeeElements.lastNameField);
        I.fillField(employeeElements.lastNameField, lastName);
    },

    /**
     * Нажимает на кнопку сохранения
     */
    clickSaveButton() {
        I.waitForVisible(employeeElements.saveAndSearchButton);
        I.click(employeeElements.saveAndSearchButton);
        I.waitInUrl(employeeDetailPage.employeeDetailUrl);
        I.waitForInvisible(employeeElements.loadSpinner);
    },

    /**
     * Кликает на чек-бокс для заполнения данных логина
     */
    clickLoginDetailsCheckBox() {
        I.waitForVisible(this.createLoginDetailsCheckBox);
        I.click(this.createLoginDetailsCheckBox);
    },

    /**
     * Заполняет поле создания имени логина
     *
     * @param username
     */
    fillUsernameForLoginDetail(username) {
        I.fillField(this.getInputFieldLocator('Username'), username);
    },

    /**
     * Заполняет поле создания пароля
     *
     * @param password
     */
    fillPasswordForLoginDetail(password) {
        I.fillField(this.getInputFieldLocator('Password'), password);
    },

    /**
     * Заполняет поле подтверждения пароля
     *
     * @param password
     */
    fillConfirmPasswordForLoginDetail(password) {
        I.fillField(this.getInputFieldLocator('Confirm Password'), password);
    },

    /**
     * Достает локатор одного инпут-элемента в блоке заполнения данных логина
     *
     * @param fieldName
     * @returns {Locator}
     */
    getInputFieldLocator(fieldName) {
        return locate(this.inputFieldsInLoginDetails)
            .inside(locate('div')
                .after(locate('div')
                    .withChild(locate('label')
                        .withText(fieldName))));
    },
}
