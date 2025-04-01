import { test, expect } from "@playwright/test";

test('Mouser Hover', async ({ page }) => {
    await page.goto('https://www.browserstack.com/guide/mouse-hover-in-selenium')

    const developer =await page.locator("//button[@id='developers-dd-toggle']")
    const macsubMenu =await page.locator("//a[@title='Support']//span[@class='item-text'][normalize-space()='Support']")

    //mouse hover
    await developer.hover()
    await macsubMenu.click()
    await page.waitForTimeout(6000)


});
