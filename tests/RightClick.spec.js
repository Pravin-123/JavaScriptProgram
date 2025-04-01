import { test, expect } from "@playwright/test";

test('Right click', async ({ page }) => {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    const rightClickButton =await page.locator("//span[normalize-space()='right click me']")
    
  //right click operation
    await rightClickButton.click({button:'right'})
    await page.locator("//span[normalize-space()='Copy']").click()
    await page.waitForTimeout(6000)


});
