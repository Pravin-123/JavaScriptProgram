import { test, expect } from '@playwright/test';
//https://playwright.dev/docs/test-assertions
// 1) expect(page).toHaveURL()   Page has URL
// 2) expect(page).toHaveTitle()   Page has title
// 3) expect(locator).toBeVisible()  Element is visible
// 4) expect(locator).toBeEnabled()  Control is enabled
// 5) expect(locator).toBeChecked()  Radio/Checkbox is checked
// 6) expect(locator).toHaveAttribute() Element has attribute
// 7) expect(locator).toHaveText()  Element matches text
// 8) expect(locator).toContainText()  Element contains text
// 9) expect(locator).toHaveValue(value) Input has a value
// 10) expect(locator).toHaveCount()  List of elements has given length
test('Assrtion Test',async({page})=>{
    //open the URL
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')
    // 1) expect(page).toHaveURL()   Page has URL

    const pageUrl= await page.url();
    console.log("page URl: ", pageUrl);
    expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F')
   
    // 2) expect(page).toHaveTitle()   Page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

 // 3) expect(locator).toBeVisible()  Element is visible
    const logoElement=await page.locator('.header-logo')
    await expect(logoElement).toBeVisible();

    // 4) expect(locator).toBeEnabled()  Control is enabled

    const logoElementEnable=await page.locator('#small-searchterms')
    await expect(logoElementEnable).toBeEnabled();

    // 5) expect(locator).toBeChecked()  Radio/Checkbox is checked
     const maleRadioButton= await page.locator('#gender-male')
     await maleRadioButton.click();  //click on button
     await expect(maleRadioButton).toBeChecked()

     //checkbox selection

     const newsLetterCheckboxSelection =await page.locator('#Newsletter')
     await expect(newsLetterCheckboxSelection).toBeChecked();

   // 6) expect(locator).toHaveAttribute() Element has attribute
   const registerButton =await page.locator('#register-button')
   await expect(registerButton).toHaveAttribute('type','submit')
    
   // 7) expect(locator).toHaveText()  Element matches text

   await expect(await page.locator('.page-title h1')).toHaveText('Register') //css locator

   //get text or InnerText
   const getInnerText =await page.locator('.page-title h1')
   console.log('inner text :', await getInnerText.textContent());
   

  // 8) expect(locator).toContainText()  Element contains text
   await expect(await page.locator('.page-title h1')).toContainText('Reg') //css locator

   // 9) expect(locator).toHaveValue(value) Input has a value
   const emailInputBox =await page.locator('#Email')
   emailInputBox.fill('test@demo.com')
   await expect(emailInputBox).toHaveValue('test@demo.com')

// 10) expect(locator).toHaveCount()  List of elements has given length


})



