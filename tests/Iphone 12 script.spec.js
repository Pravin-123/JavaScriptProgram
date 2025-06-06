import { test, expect, devices } from '@playwright/test';

//npx playwright codegen --device "iphone12"  ---> this command automatically generated script on iphone12

test.use({
  ...devices['iPhone 12'],
});

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  
  await page.locator('#loginusername').fill('pavanol');

  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
});