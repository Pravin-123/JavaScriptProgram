import { test, expect } from "@playwright/test";
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/Cart'
//const {LoginPage} = require('../pages/LoginPage')

test('POM test', async ({ page }) => {
    const loginpage = new LoginPage(page);
    await loginpage.gotoLoginPage()
    await loginpage.login('pavanol', 'test@123')
    await page.waitForTimeout(3000)

    //homepage
    const homepageObject = new HomePage(page)
    await page.waitForTimeout(3000)
    await homepageObject.clicOnProduct('Nexus 6')
    await homepageObject.clickOnAddCartButton();
    await page.waitForTimeout(5000)
    await homepageObject.handlePopup()
    await homepageObject.clickCartLink()


    //Cart 
    const cartPageObject = new CartPage(page);
    //cartPageObject.clickCartLink();
    await page.waitForTimeout(5000)
    const status =await cartPageObject.checkAddedProduct('Nexus 6');
    expect(await status).toBe(true);
});

