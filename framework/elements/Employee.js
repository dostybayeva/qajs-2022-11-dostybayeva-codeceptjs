const { I } = inject();

module.exports = {
    /**
     * Поле ввода имени работника
     */
    firstNameField: '[name="firstName"]',

    /**
     * Поле ввода второго имени работника
     */
    middleNameField: '[name="middleName"]',

    /**
     * Поле ввода фамилии работника
     */
    lastNameField: '[name="lastName"]',

    /**
     * Кнопка сохранения/поиска
     */
    saveAndSearchButton: '.orangehrm-left-space',

    /**
     * Лоадер загрузки
     */
    loadSpinner: '.oxd-loading-spinner',
}
