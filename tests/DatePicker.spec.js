import { test, expect } from "@playwright/test";

test('Date Picker', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    //await page.locator("//input[@id='datepicker']").fill('03/11/2024')
    // await page.fill("//input[@id='datepicker']", '03/11/2024')
    //await page.waitForTimeout(5000)

    //datepicker
    const year = "2025"
    const month = "March"
    const date = "15"
    await page.locator("//input[@id='datepicker']").click()
    // await page.waitForTimeout(3000)
    while (true) {
        const currentYear = await page.locator("//span[@class='ui-datepicker-year']").textContent();
        const currentMonth = await page.locator("//span[@class='ui-datepicker-month']").textContent();
        if (currentYear == year && currentMonth == month) {
            break;
        }
        //click on next button on calendar pop up
        await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']").click();
    }
    //await page.waitForTimeout(3000)
    //to get all date and select mentioned date
    // const dates = await page.$$("//td[@data-handler='selectDay']")
    // for (const dt of dates) {
    //     if (await dt.textContent() == date) {
    //         await dt.click();
    //     }
    // }

    //date selected without for loop 
    await page.locator(`//a[@class='ui-state-default'][text()='${date}']`).click();
});