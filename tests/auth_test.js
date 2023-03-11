Feature.skip('auth');

Before(({loginPage}) => {
    loginPage.visit();
});

Scenario('Успешная авторизация', ({ I, loginPage, credentials}) => {
    loginPage.fillUsername(credentials.LOGIN);
    loginPage.fillPassword(credentials.PASSWORD);
    loginPage.clickLoginButton();
    I.seeInCurrentUrl('/web/index.php/dashboard/index');
});

Scenario('Отображение ошибки при авторизации с пустыми реквизитами', ({ I , loginPage}) => {
    loginPage.clickLoginButton();
    I.seeTextEquals('Required', loginPage.emptyUsernameFieldError());
    I.seeTextEquals('Required', loginPage.emptyPasswordFieldError());
});

Scenario('Отображение ошибки при авторизации с неправильным логином', ({ I , loginPage, credentials}) => {
    loginPage.fillUsername('Aadmin');
    loginPage.fillPassword(credentials.PASSWORD);
    loginPage.clickLoginButton();
    I.waitForVisible(loginPage.invalidValueError);
    I.seeTextEquals('Invalid credentials', loginPage.invalidValueError);
});

Scenario('Отображение ошибки при авторизации с неправильным паролем', ({ I , loginPage, credentials}) => {
    loginPage.fillUsername(credentials.LOGIN);
    loginPage.fillPassword('aadmin123');
    loginPage.clickLoginButton();
    I.waitForVisible(loginPage.invalidValueError);
    I.seeTextEquals('Invalid credentials', loginPage.invalidValueError);
});
