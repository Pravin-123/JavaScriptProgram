const { expect } = require('@playwright/test');

class CartPage {
    constructor(page) {
        this.page = page;
        this.addedProduct = page.locator("//table[@class='table table-bordered table-hover table-striped']/tbody/tr/td[2]");
    }

    async checkAddedProduct(productName) {
        //const productList = await this.page.$$(this.totalProductList)
        const addproductCheck = await this.addedProduct.all()
        for (const product of addproductCheck) {
            // await product.te
            if (productName == await product.textContent()) {
                return true;
                break;
            }
        }
    }
}
module.exports = { CartPage };