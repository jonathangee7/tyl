import CheckoutPage from "./CheckoutPage";

class CartPage {
    visit() {
        cy.visit('https://www.saucedemo.com/cart.html');
    }

    getCartList() {
        return cy.get(`div[class=cart_list]`);
    }

    clickCheckout() {
        const checkout = cy.get(`button[data-test=checkout]`);
        checkout.click();
        return new CheckoutPage()
    }



}

export default CartPage;