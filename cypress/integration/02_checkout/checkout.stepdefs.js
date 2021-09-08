import { When } from "cypress-cucumber-preprocessor/steps";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage"

When('I submit valid checkout details', () => {
    const cartPage = new CartPage();
    const checkoutPage = cartPage.clickCheckout();

    checkoutPage.typeFirstname("Jonathan");
    checkoutPage.typeLastname("Gee");
    checkoutPage.typePostcode("Test123");
    checkoutPage.clickSubmitButton();
});

When('I submit invalid checkout details', () => {
    const cartPage = new CartPage();
    const checkoutPage = cartPage.clickCheckout();

    checkoutPage.clickSubmitButton();
});

When('I click finish checkout', () => {
    const checkoutPage = new CheckoutPage();
    checkoutPage.clickFinishCheckout();
});
Then('I can verify I have selected {string}', (delivery) => {
    const checkoutPage = new CheckoutPage();
    checkoutPage.getCompleteText().siblings(`img`)
    .invoke('attr', 'alt')
    .should('eq', delivery)
  
});

Then('I am on checkout overview page', () => {
    const checkoutPage = new CheckoutPage();
    checkoutPage.getTitle().should('have.text', 'Checkout: Overview')
});

Then('I can see an error alert', () => {
    const checkoutPage = new CheckoutPage();
    checkoutPage.getInlineError().should('exist');
});