import { test,expect } from "@playwright/test";
import exp from "constants";
//import test from "node:test";

test('handle Radio button', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')

//radio button
 await page.locator("//input[@id='male']").check();
 //or
// await page.check("//input[@id='male']")
await expect(await page.locator("//input[@id='male']")).toBeChecked();
await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy()
await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy()

await page.waitForTimeout(2000)
})