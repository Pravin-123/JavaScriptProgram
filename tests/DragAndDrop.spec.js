import { test, expect } from "@playwright/test";

test('Drag and drop demo', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Static.html')
  await page.waitForTimeout(3000);
  const sourceImage = await page.locator("//div[@id='dragarea']//div[@class='col-xs-10 col-xs-offset-2'][1]")
  const targetImage = await page.locator("//div[@id='droparea']");
  //Approach 1:
  await page.waitForSelector("//div[@id='dragarea']//div[@class='col-xs-10 col-xs-offset-2'][1]",{ state: 'visible' }); // Ensure it's visible
  await sourceImage.hover();
  await page.mouse.down();
  await page.waitForSelector("//div[@id='droparea']",{ state: 'visible' }); // Ensure target is visible
  await targetImage.hover();
  await page.mouse.up();

  //approach 2
  // await sourceImage.dragTo(targetImage)
  await page.waitForTimeout(6000);


});
