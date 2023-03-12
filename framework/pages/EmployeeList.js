const { I, employeeDetailPage } = inject();

module.exports = {
    /**
     * Стр списка работников
     */
    employeeListUrl: '/web/index.php/pim/viewEmployeeList',

    /**
     * Блок списка работников
     */
    employeeList: '.orangehrm-employee-list',

    /**
     * Локатор для поля ввода имени в сортировке
     */
    sortByEmployeeNameField: '[placeholder="Type for hints..."]',

    /**
     * Кнопка поиска
     */
    searchButton: '.orangehrm-left-space',

    /**
     * Лоадер загрузки
     */
    loadSpinner: '.oxd-loading-spinner',

    /**
     * Кнопка удаления выбранных на стр списка работников
     */
    employeeDeleteButton: '.oxd-button--label-danger',

    /**
     * Поп-ап для подтверждения удаления
     */
    popup: '.orangehrm-dialog-popup',

    /**
     * Чек-бокс выбора всех записей в списке
     */
    chooseAll: '.oxd-table-header-cell .oxd-checkbox-wrapper',

    /**
     * Поле с именем работника в результате поиска
     */
    employeeNameInSearchResult: '.oxd-table-cell:nth-child(3)',

    /**
     * Переходит на стр списка работников
     */
    visit() {
        I.amOnPage(this.employeeListUrl);
        I.waitForVisible(this.employeeList);
    },

    /**
     * Заполняет поле ввода для сортировки по имени работника
     *
     * @param employeeName
     */
    fillEmployeeNameForSort(employeeName) {
        I.waitForVisible(locate(this.sortByEmployeeNameField).first());
        I.fillField(locate(this.sortByEmployeeNameField).first(), employeeName);
    },

    /**
     * Нажимает на кнопку поиска
     */
    clickSearchButton() {
        I.waitForVisible(this.searchButton);
        I.click(this.searchButton);
        I.waitForInvisible(this.loadSpinner);
    },

    /**
     * Нажимает на кнопку удаления на стр списка
     */
    clickEmployeeDeleteButton() {
        I.waitForVisible(this.employeeDeleteButton);
        I.click(this.employeeDeleteButton);
        I.waitForVisible(this.popup);
    },

    /**
     * Нажимает на кнопку удаления в поп-апе
     */
    clickDeleteButtonInPopup() {
        I.waitForVisible(`${this.popup} ${this.employeeDeleteButton}`);
        I.click(`${this.popup} ${this.employeeDeleteButton}`);
    },

    /**
     * Нажимает на запись по одному работнику
     */
    clickByEmployeeRow() {
        I.waitForVisible(this.employeeNameInSearchResult);
        I.click(this.employeeNameInSearchResult);
        I.waitForVisible(employeeDetailPage.employeeName);
    },

    /**
     * Нажимает на чек-бокс выбора всех записей в списке
     */
    clickChooseAll() {
        I.waitForVisible(this.chooseAll);
        I.click(this.chooseAll);
    }
}
