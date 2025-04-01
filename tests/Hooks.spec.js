import { test, expect } from "@playwright/test";

test('Home Page Test', async ({ page }) => {
    //login
    await page.goto('https://www.demoblaze.com/')
    const loginLink = await page.locator("//a[@id='login2']").click()
    const id = await page.locator("//input[@id='loginusername']").fill('pavanol')
    const password = await page.locator("//input[@id='loginpassword']").fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click()
    //await page.waitForTimeout(9000)

    //Home Page
    await page.waitForSelector("//a[@id='nameofuser']", { state: 'visible' }); // Ensure it's visible

    const loggedUserName = await page.locator("//a[@id='nameofuser']").textContent();
    console.log("user name: ", loggedUserName);
    expect(await page.locator("//a[@id='nameofuser']")).toHaveText('Welcome pavanol')
    const totalProduct = await page.$$("//a[@class='hrefch']")
    expect(totalProduct).toHaveLength(9)


    //logout
    await page.locator("//a[@id='logout2']").click()



});

test('Add product to cart test', async ({ page }) => {

    //login
    await page.goto('https://www.demoblaze.com/')
    const loginLink = await page.locator("//a[@id='login2']").click()
    const id = await page.locator("//input[@id='loginusername']").fill('pavanol')
    const password = await page.locator("//input[@id='loginpassword']").fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click()
    //Add product to the cart
    await page.waitForSelector("//a[normalize-space()='Samsung galaxy s6']",{ state: 'visible' }); // Ensure it's visible

    const productOnHP= await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.waitForSelector("//a[normalize-space()='Add to cart']",{state:'visible'})
    const addCartButton= await page.locator("//a[normalize-space()='Add to cart']").click()

    //handle pop up
    page.on('dialog',async dialog=>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
        await page.waitForTimeout(2000)
    })


    //logout
    await page.locator("//a[@id='logout2']").click()

})
