import InventoryPage from './InventoryPage';

class LoginPage {
    visit() {
        cy.clearCookies()
        cy.visit('https://www.saucedemo.com/');
    }

    typeUsername(username) {
        const field = cy.get(`input[data-test=username]`);
        field.clear();
        field.type(username);
        return this;
    }

    typePassword(password) {
        const field = cy.get(`input[data-test=password]`);
        field.clear();
        field.type(password);
        return this;
    }

    clickLoginButton() {
        const button = cy.get(`input[data-test=login-button]`);
        button.click();
        return new InventoryPage();
    }
}

export default LoginPage;