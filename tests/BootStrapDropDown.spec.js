import { test,expect } from "@playwright/test";
test('Bootstrap Drop down', async({page})=>{
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')

    await page.locator('.multiselect-selected-text').click()
    const totalvalues =await page.locator("//ul[@class='multiselect-container dropdown-menu']//li/a/label/input")
    await expect(totalvalues).toHaveCount(11)

    //2
    const allValues =await page.$$("//ul[@class='multiselect-container dropdown-menu']//li/a/label/input")
    await expect(allValues.length).toBe(11)

    //3. select all option from DD
    const ddElements  =await page.$$("//ul[@class='multiselect-container dropdown-menu']//li/a/label")
    for(const element of ddElements ){
        const text  = await element.textContent();
        console.log('All values: ',text );
        if(text.includes('Angular') || (text.includes('Python'))){
            await element.click();
        }  
    }

    await page.waitForTimeout(3000) 

    //3. Deselect selected option from DD
    const ddElement  =await page.$$("//ul[@class='multiselect-container dropdown-menu']//li/a/label")
    for(const deselectelement of ddElements){
        const deselecttext  = await deselectelement.textContent();
       // console.log('All values: ',text );
        if(deselecttext.includes('CSS') || (deselecttext.includes('HTML'))){
            await deselectelement.click();
        }  
    }
//practice
const elements =await page.$$("//ul[@class='multiselect-container dropdown-menu']//li/a/label")
for(const ele of elements){
   const value= await ele.textContent();
   if(value.includes('Oracle')){
    await ele.click()
   }
}

    await page.waitForTimeout(3000)
 
});