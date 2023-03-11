const { I } = inject();

module.exports = {
    /**
     * Стр добавления нового работника
     */
    addEmployeePage: '/web/index.php/pim/addEmployee',

    /**
     * Форма добавления работника
     */
    employeeForm: '.orangehrm-employee-form',

    /**
     * Поле ввода имени работника
     */
    firstNameField: '[name="firstName"]',

    /**
     * Поле ввода фамилии работника
     */
    lastNameField: '[name="lastName"]',

    /**
     * Кнопка сохранить
     */
    saveButton: '.orangehrm-left-space',

    /**
     * Лоадер после сохранения
     */
    loadSpinner: '.oxd-loading-spinner',

    /**
     * Чек-бокс для создания данных логина
     */
    createLoginDetailsCheckBox: '.oxd-switch-wrapper',

    /**
     * Локатор инпут-элементов в блоке заполнения данных логина
     */
    inputFieldsInLoginDetails: 'input[autocomplete="off"]',

    /**
     * Ошибка при пустом поле логина/пароля
     */
    emptyFieldError: '.oxd-input-field-error-message',

    /**
     * Переходит на стр добавления нового работника
     */
    visit() {
        I.amOnPage(this.addEmployeePage);
        I.waitForVisible(this.employeeForm);
    },

    /**
     * Заполняет имя работника
     *
     * @param firstName
     */
    fillFirstName(firstName) {
        I.waitForVisible(this.firstNameField);
        I.fillField(this.firstNameField, firstName);
    },

    /**
     * Заполняет фамилию работника
     *
     * @param lastName
     */
    fillLastName(lastName) {
        I.waitForVisible(this.lastNameField);
        I.fillField(this.lastNameField, lastName);
    },

    /**
     * Нажимает на кнопку сохранения
     */
    clickSaveButton() {
        I.waitForVisible(this.saveButton);
        I.click(this.saveButton);
        I.waitForInvisible(this.loadSpinner);
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

    /**
     * Достает локатор ошибки при пустом поле имени
     * @returns {Locator}
     */
    emptyFirstNameFieldError() {
        return this.getEmptyFieldErrorLocator(this.firstNameField);
    },

    /**
     * Достает локатор ошибки при пустом поле фамилии
     * @returns {Locator}
     */
    emptyLastNameFieldError() {
        return this.getEmptyFieldErrorLocator(this.lastNameField);
    },

    /**
     * Достает локатор ошибок для полей логин/пароль
     *
     * @param fieldLocator
     * @returns {Locator}
     */
    getEmptyFieldErrorLocator(fieldLocator) {
        return locate(this.emptyFieldError).after(locate('div').withChild(fieldLocator));
    },
}
