const{test, expect}=require('@playwright/test')
test('Locator_Builtin methods',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const logo =await page.getByAltText('company-branding')
    await expect(logo).toBeVisible() //check logo present or not
    
    //Locators:
    //pagegetByRole() to locate by explicit and implicit accessibility attributes.
    // page.getByText() to locate by text content.
    //page.getByLabel() to locate a form control by associated label's text.
   // page.getByPlaceholder() to locate an input by placeholder.
    //page.getByAltText() to locate an element, usually image, by its text alternative.
    //page.getByTitle() to locate an element by its title attribute.
    //page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).



    //getByPlaceHolder()
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button',{type:'submit'}).click();// HTML snippet<button type="submit" ">Login </button>
    await expect(await page.getByText('Shalom Girma')).toBeVisible()  //getByPageText --locator

    //get the text --> like inner text --> textContent()
    const nameFromProfile =await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    console.log(nameFromProfile);
    


})

 

//Locator_Builtin