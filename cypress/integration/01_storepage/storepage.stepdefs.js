import { When } from "cypress-cucumber-preprocessor/steps";
import InventoryPage from "../pages/InventoryPage"

When('I sort inventory by {string}', (sortStyle) => {
    const inventoryPage = new InventoryPage();

    inventoryPage.getProductSortSelect().select(sortStyle);
});


/*Note: As a design choice, we can choose to keep the complexity in the step definition 
or hide it in a validation helper class - a trade-off between setup an maintenance 
of helper classes and better readability and seperation of concerns
*/
Then('I can validate inventory is sorted by {string}', (validationStyle) => {
    const inventoryPage = new InventoryPage();
    switch (validationStyle) {
        case 'non-increasing': {
            const priceArray = inventoryPage.getProductPrices();
            cy.wrap(priceArray).then((priceArray) => {
                for (let i = 0; i < priceArray.length - 1; i++) {
                    const current = parseFloat(priceArray[i].replace('$', ''))
                    const next = parseFloat(priceArray[i + 1].replace('$', ''))
                    assert.isAtMost(next, current);
                }
            })
            break;
        }
        case 'non-decreasing': {
            const priceArray = inventoryPage.getProductPrices();
            cy.wrap(priceArray).then((priceArray) => {
                for (let i = 0; i < priceArray.length - 1; i++) {
                    const current = parseFloat(priceArray[i].replace('$', ''))
                    const next = parseFloat(priceArray[i + 1].replace('$', ''))
                    assert.isAtLeast(next, current);
                }
            })
            break;
        }
        default: {
            throw new Error("No valid sorting validation style")
        }
    }
});
