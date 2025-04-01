import { test, expect } from '@playwright/test';

////npx playwright codegen  ---> this command automatically generated script on browser
test('test', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginusername').press('Tab');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click(); /// getByRole - locator
  
});