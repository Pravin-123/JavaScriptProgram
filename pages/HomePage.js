const { expect } = require('@playwright/test');

class HomePage {
    constructor(page) {
        this.page = page;
        this.totalProductList = page.locator("//div[@class='card-block']/h4/a");
        this.addToCartButton = page.locator("//a[normalize-space()='Add to cart']");
        this.clickOnCartLink = page.locator("//a[@id='cartur']");
        // this.clickOnCartLink = page.locator("//a[@id='cartur']");

    }
    async clicOnProduct(productName) {
        //const productList = await this.page.$$(this.totalProductList)
        const productList = await this.totalProductList.all()
        for (const product of productList) {
            // await product.te
            if (productName == await product.textContent()) {
                await product.click();
                break;
            }
        }
    }
    //handle pop up
    async handlePopup() {
        this.page.on('dailog', async dialog => {
            if (dialog.message().include('Product added.')) {
                await dialog.accept();
            }
        })
    }

    //click on add cart button
    async clickOnAddCartButton() {
        await this.addToCartButton.click();
    }

    async clickCartLink() {
        await this.clickOnCartLink.click();
    }
}
module.exports = { HomePage };