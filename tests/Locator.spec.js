import{test,expect} from '@playwright/test';
import exp from 'constants';
test('locator test', async({page})=>{
await page.goto('https://www.demoblaze.com/')
//click on login button  - property
//css locator
//await page.locator('id=login2').click()
//Or
await page.click('id=login2')
//after opening pop up we need to provide User name  -CSS
//await page.locator('#loginusername').fill('pavanol')
//or
await page.fill('#loginusername','pavanol')
//Password  -xpath
await page.fill("//input[@id='loginpassword']",'test@123')

//click on sign in button -- xpath
await page.locator("//button[normalize-space()='Log in']").click();
//check log out present
 const logOutLinkPresent=await page.locator("//a[@id='logout2']")
 await expect(logOutLinkPresent).toBeVisible();
 

})