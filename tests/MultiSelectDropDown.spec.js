import { test,expect } from "@playwright/test";
test('handle multi select Drop down values', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.selectOption('#colors',['Yellow','Red'])//select multiple value from DD
   
    //Assertion
    //check number of option from dd
    const options=await page.locator('#colors option')
    await expect(options).toHaveCount(7)
    //check number of option from dd using JS arrray
    const option=await page.$$('#colors option')
    console.log('size of the dd', option.length);
     await expect(option.length).toBe(7)
//check presence of the value from dd

const allValues=await page.locator('#colors').textContent()
await expect(allValues.includes('Red')).toBeTruthy()

     await page.waitForTimeout(3000)  
});