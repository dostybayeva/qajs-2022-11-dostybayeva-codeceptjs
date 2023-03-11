const { I } = inject();

module.exports = {
    /**
     * Стр списка работников
     */
    employeeListPage: '/web/index.php/pim/viewEmployeeList',

    /**
     * Подстраница одного работника
     */
    employeeDetailPath: '/viewPersonalDetails',

    /**
     * Имя работника
     */
    employeeName: '.orangehrm-edit-employee-name > h6',

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
     * Переходит на стр списка работников
     */
    visit() {
        I.amOnPage(this.employeeListPage);
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
     * Достает поля имени работника в результате поиска
     *
     * @returns {Locator}
     */
    employeeNameInSearchResult() {
        return locate('.oxd-table-cell').at(3)
    },

    /**
     * Нажимает на запись по одному работнику
     */
    clickByEmployeeRow() {
        I.click(this.employeeNameInSearchResult());
        I.waitForVisible(this.employeeName);
    },

    /**
     * Нажимает на чек-бокс выбора всех записей в списке
     */
    clickChooseAll() {
        I.waitForVisible(this.chooseAll);
        I.click(this.chooseAll);
    }
}
