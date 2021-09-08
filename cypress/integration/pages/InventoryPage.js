import CartPage from './CartPage';

class InventoryPage {

    getProductSortSelect() {
        return cy.get(`select[data-test='product_sort_container']`);
    };

    clickBasket() {
        const basket = cy.get(`a[class=shopping_cart_link]`);
        basket.click();
        return new CartPage()
    }

    getProductPrices() {
        const inventoryList = cy.get(`div[class=inventory_list]`);
        let priceArray = [];
        inventoryList.children().each(($el, index, $list) => {
            cy.wrap($el).find(`div[class=inventory_item_price]`).then(($price) => {
                const text = $price.text()
                priceArray.push(text);
            })
        });
        return priceArray;
    };

    getProductByName(name) {
      const productNameElement = cy.get(`div[class=inventory_item_name]`).contains(name);
      const inventoryItemElement = productNameElement.parentsUntil(`div[class=inventory_list]`).filter(`div[class=inventory_item]`);
      return inventoryItemElement;
    };
    

}

export default InventoryPage;