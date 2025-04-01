import { test, expect } from "@playwright/test";

test('Keyboard Action', async ({ page }) => {
    await page.goto('https://gotranscript.com/text-compare')
    //const textArea1= await page.locator("//textarea[@name='text1']").fill("Welcome to Automation")
    //or
    await page.fill("//textarea[@name='text1']", 'Welcome to Automation')

    //select all or Control + A
    await page.keyboard.press('Control+A')

    //Copy
    await page.keyboard.press('Control+C')

    //Tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    //paste
    await page.keyboard.press('Control+v')

    await page.waitForTimeout(3000);

});
