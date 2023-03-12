const { I } = inject();

module.exports = {
    /**
     * Стр одного работника
     */
    employeeDetailUrl: '/viewPersonalDetails',

    /**
     * Имя работника в боковом меню
     */
    employeeName: '.orangehrm-edit-employee-name > h6',

    /**
     * Поле имени работника в блоке для редактирования
     */
    firstNameField: '[name="firstName"]',

    /**
     * Поле второго имени работника в блоке для редактирования
     */
    middleNameField: '[name="middleName"]',

    /**
     * Поле фамилии работника в блоке для редактирования
     */
    lastNameField: '[name="lastName"]',

    /**
     * Кнопка сохранить
     */
    saveButton: '.orangehrm-horizontal-padding .orangehrm-left-space',

    /**
     * Убеждаемся, что мы находимся на стр детальной информации по работнику
     * тк по прямому переходу нельзя попасть на стр
     */
    visit() {
        I.waitInUrl(this.employeeDetailUrl);
    },

    /**
     * Вытаскивает заполненные данные пользователя
     */
    async grabNameValue(name) {
        I.waitForVisible(name);
        return await I.grabAttributeFrom(name, '_value');
    },

    /**
     * Вытаскивает заполненное имя пользователя
     */
    async grabFirstNameValue() {
        return await this.grabNameValue(this.firstNameField);
    },

    /**
     * Вытаскивает заполненное второе имя пользователя
     */
    async grabMiddleNameValue() {
        return await this.grabNameValue(this.middleNameField);
    },

    /**
     * Вытаскивает заполненную фамилию пользователя
     */
    async grabLastNameValue() {
        return await this.grabNameValue(this.lastNameField);
    },

    /**
     * Костыль для чистки поля ввода
     * тк clearField() не сработал
     */
    clearField(fieldName) {
        I.waitForVisible(fieldName);
        I.click(fieldName);
        I.pressKey(['CommandOrControl', 'A']);
        I.pressKey('Delete');
    },

    /**
     * Очищает поле имени пользователя
     */
    clearFirstNameField() {
        this.clearField(this.firstNameField);
    },

    /**
     * Очищает поле фамилии пользователя
     */
    clearLastNameField() {
        this.clearField(this.lastNameField);
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

    clickSaveButton() {
        I.waitForVisible(this.saveButton);
        I.click(this.saveButton);
    }
};
