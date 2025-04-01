import { test, expect } from "@playwright/test";

test('Double click action', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/')
  const doubleClickButton = await page.locator("//button[normalize-space()='Copy Text']")

  await page.waitForTimeout(2000)
  //Double click operation
  await doubleClickButton.dblclick() //dblclick() method use for double click
  
  const inputValue = await page.locator("//input[@id='field2']");
  //assertion
  await expect(inputValue).toHaveValue('Hello World!')
  await page.waitForTimeout(6000);


});
