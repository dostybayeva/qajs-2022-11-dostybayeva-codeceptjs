const { I } = inject();

module.exports = {
    /**
     * Переходит на стр логиа
     */
    visit() {
        I.amOnPage(this.loginUrl);
        I.waitForVisible(this.loginForm);
    },

    /**
     * Заполняет поле ввода логина
     */
    fillUserName(name) {
        I.fillField(this.userNameField, name);
    },

    /**
     * Заполняет поле ввода пароля
     */
    fillPassword(password) {
        I.fillField(this.passwordField, password);
    },

    /**
     *
     */
    clickLoginButton() {
        I.click(this.loginButton);
    },

    /**
     * Стр логина
     */
    loginUrl: '/web/index.php/auth/login',

    /**
     * Локатор формы логина
     */
    loginForm: '.orangehrm-login-form',

    /**
     * Локатор поля ввода логина
     */
    userNameField: '[name="username"]',

    /**
     * Локатор поля ввода пароля
     */
    passwordField: '[name="password"]',

    /**
     * Локатор кнопки логина
     */
    loginButton: '.orangehrm-login-button'
}
