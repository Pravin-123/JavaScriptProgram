import { test, expect } from '@playwright/test';


//if you have already property added  then it will add screenshot in report, screenshot:'on'
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});