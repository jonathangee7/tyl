import { Given } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";
import CartPage from "../pages/CartPage";


Given('I login to the store', () => {
    const loginPage = new LoginPage();
    loginPage.visit();
    loginPage.typeUsername('standard_user');
    loginPage.typePassword('secret_sauce');
    loginPage.clickLoginButton();
})


//Note: These two can be used in both checkout and storepage features, we could further divide our common stepdefs if the app is more complex
When('I add item with name {string}', (itemName) => {
    const inventoryPage = new InventoryPage();
    inventoryPage.getProductByName(itemName).contains('Add to cart').click();
});

When('I click on basket', () => {
    const inventoryPage = new InventoryPage();
    inventoryPage.clickBasket();
});

Then('I can verify the correct item {string} was added', (item) => {
    const cartPage = new CartPage();
    cartPage.getCartList().contains(item).should('exist');
});
