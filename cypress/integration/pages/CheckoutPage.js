class CheckoutPage {

    getCartList() {
        return cy.get(`div[class=cart_list]`);
    }

    typeFirstname(firstname) {
        const field = cy.get(`input[data-test=firstName]`);
        field.clear();
        field.type(firstname);
        return this;
    }

    typeLastname(lastname) {
        const field = cy.get(`input[data-test=lastName]`);
        field.clear();
        field.type(lastname);
        return this;
    }
    typePostcode(postcode) {
        const field = cy.get(`input[data-test=postalCode]`);
        field.clear();
        field.type(postcode);
        return this;
    }

    clickSubmitButton() {
        const button = cy.get(`input[data-test=continue]`);
        button.click();
        return this;
    }

    clickFinishCheckout() {
        const button = cy.get(`button[data-test=finish]`);
        button.click();
        return this;        
    }

    getInlineError() {
        return cy.get(`h3[data-test=error]`);
    }

    getCompleteText() {
        return cy.get(`div[class=complete-text]`)
    }

    getTitle() {
        return cy.get(`span[class=title]`)
    }
}

export default CheckoutPage