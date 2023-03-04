Feature('auth');

Scenario('Успешная авторизация', ({ I }) => {
    I.amOnPage('web/index.php/auth/login')
    console.log('HELLO');
});
