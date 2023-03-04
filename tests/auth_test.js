Feature('auth');

Scenario('Успешная авторизация', ({ I, loginPage}) => {
    loginPage.visit();
    loginPage.fillUserName('Admin');
    loginPage.fillPassword('admin123');
    loginPage.clickLoginButton();
    I.waitInUrl('/web/index.php/dashboard/index');
});
