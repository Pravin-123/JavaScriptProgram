import { test,expect } from "@playwright/test";
import exp from "constants";
//import test from "node:test";

test('handle Radio button', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')

//Single Checkbox check
 //await page.locator("#monday").check();
 //or
 await page.check('#monday')
 await expect(await page.locator('#monday')).toBeChecked();
 await expect(await page.locator('#monday').isChecked()).toBeTruthy();

 await page.waitForTimeout(2000)
  // Uncheck the checkbox
 await page.uncheck('#monday');
 await page.waitForTimeout(2000)

 //multiple Checkbox check, stored all locator in array
 const checkMulipleCheckBox=[
  "#monday",
  "#sunday",
  "#saturday"
 ];
 //iterate for loo[]
  for( const days of checkMulipleCheckBox){
    await page.locator(days).check()
  }
  await page.waitForTimeout(2000)

  //unchecked selected checkbox
  for( const days of checkMulipleCheckBox){
    if( await page.locator(days).isChecked())
    await page.locator(days).uncheck();
  }

await page.waitForTimeout(2000)
})