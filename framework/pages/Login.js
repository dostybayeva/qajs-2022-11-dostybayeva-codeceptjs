const { I } = inject();

module.exports = {
    /**
     * Стр логина
     */
    loginUrl: '/web/index.php/auth/login',

    /**
     * Форма логина
     */
    loginForm: '.orangehrm-login-form',

    /**
     * Поле ввода логина
     */
    usernameField: '[name="username"]',

    /**
     * Поле ввода пароля
     */
    passwordField: '[name="password"]',

    /**
     * Кнопка логина
     */
    loginButton: '.orangehrm-login-button',

    /**
     * Ошибка при пустом поле логина/пароля
     */
    emptyFieldError: '.oxd-input-field-error-message',

    /**
     * Ошибка при неверном логине/пароле
     */
    invalidValueError: '.oxd-alert-content-text',

    /**
     * Переходит на стр логина
     */
    visit() {
        I.amOnPage(this.loginUrl);
        I.waitForVisible(this.loginForm);
    },

    /**
     * Заполняет поле ввода логина
     *
     * @param name
     */
    fillUsername(name) {
        I.waitForVisible(this.usernameField);
        I.fillField(this.usernameField, name);
    },

    /**
     * Заполняет поле ввода пароля
     *
     * @param password
     */
    fillPassword(password) {
        I.waitForVisible(this.passwordField);
        I.fillField(this.passwordField, password);
    },

    /**
     * Кликает по кнопке login
     */
    clickLoginButton() {
        I.waitForVisible(this.loginButton);
        I.click(this.loginButton);
    },

    /**
     * Достает локатор ошибки при пустом поле логина
     * @returns {Locator}
     */
    emptyUsernameFieldError() {
        return this.getEmptyFieldErrorLocator(this.usernameField);
    },

    /**
     * Достает локатор ошибки при пустом поле пароля
     * @returns {Locator}
     */
    emptyPasswordFieldError() {
        return this.getEmptyFieldErrorLocator(this.passwordField);
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
