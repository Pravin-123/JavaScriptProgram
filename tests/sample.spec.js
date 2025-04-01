import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.screenshot({path:'tests/screenshot/'+Date.now()+'-Homepage.png'})
});

test('capture screen shot particular element', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');
    await page.locator("(//img[@alt='Image'])[38]").screenshot({path:'tests/screenshot/'+Date.now()+'-fullpage.png',fullPage:true})
    
  });