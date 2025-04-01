import { test, expect } from "@playwright/test";
import { log } from "console";
test.skip('Alert with OK', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    //enabling dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
        await page.waitForTimeout(2000)
    });

    await page.locator("//button[normalize-space()='Simple Alert']").click();
    await page.waitForTimeout(2000)
});

test.skip('Confirmation Dialog - Alert with OK and CANCEL', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    //enabling dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept();  //close by using OK button
        //await dialog.dismiss(); //close by using Cancel button
    });

    await page.locator("//button[normalize-space()='Confirmation Alert']").click();
    await expect(await page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')
    await page.waitForTimeout(5000)
});


test('Prmpt Dialog', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    //enabling dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('john');  
        
    });

    await page.locator("//button[normalize-space()='Prompt Alert']").click();
    await expect(await page.locator("//p[@id='demo']")).toHaveText('Hello john! How are you today?')
    await page.waitForTimeout(5000)
});