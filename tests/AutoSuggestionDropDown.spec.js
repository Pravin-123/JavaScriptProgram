import { test, expect } from "@playwright/test";
import { log } from "console";
test('Auto Suggestion DropDown', async ({ page }) => {
    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('Delhi')
    await page.waitForTimeout(3000)
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI jTMXri')]/div/text[1]")
    const allSuggestion = await page.$$("//li[contains(@class,'sc-iwsKbI jTMXri')]/div/text[1]")
    for (const allcity of allSuggestion) {
        const city = await allcity.textContent()
        console.log(city);
        if (city.includes('Badarpur')) {
            await allcity.click()
            break;
        }
    }
    await page.waitForTimeout(3000)

});