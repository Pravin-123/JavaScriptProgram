import { test, expect } from "@playwright/test";
import { log } from "console";
test('Hidden DropDown', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("//input[@name='username']").fill('Admin')
    await page.locator("//input[@type='password']").fill('admin123')
    await page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click()
    await page.waitForTimeout(3000)
    await page.locator("//a[normalize-space()='PIM']").click();
    await page.waitForTimeout(2000)
    //clcik on down arrrow
    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]").click()
    await page.waitForTimeout(2000)
    const ddvalues =await page.$$("//div[@role='listbox']/div/span")
    for(const values of ddvalues){
        const value =await values.textContent();
        console.log(value);
        if(value.includes('IT Manager')){
            await values.click()
            break;
            await page.waitForTimeout(2000)
        }
        //await page.waitForTimeout(2000)
        

        
    }
    



    ////div[@role='listbox']/div/span

});
