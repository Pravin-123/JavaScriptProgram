import { test,expect } from "@playwright/test";
test('handle Drop down', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

   //multiple way to select values from drop down
    //await page.locator("#country").selectOption({label:'India'}) //visible text
    //await page.locator("#country").selectOption("India") //visible text
    //await page.locator("#country").selectOption({value:"uk"}) //by using value option
    //await page.locator("#country").selectOption({index:1}) //by using index option
    //await page.selectOption('#country','India'); //by text
    //Assertion
    //check values count from dd
    const options =await page.locator("#country option")
    await expect(options).toHaveCount(10);

    //find the length of the value of the DD
    const optionsCount =await page.$$("#country option")
    console.log("total size of the value :", optionsCount.length);
    await expect(optionsCount.length).toBe(10)//assertion with count

    //check the presence of the value in dd
    const content =await page.locator("#country").textContent();
    await expect(content.includes('India')).toBeTruthy();

      //Print all the dd values
    const ddValues =await page.$$("#country option")
    for(const value of ddValues){
        console.log(await value.textContent())
    }

    //check the presence of the value from dd - approach 2
    const option =await page.$$("#country option")
    let status = false;
    for(const val of option){
        const ddVal=await val.textContent()
        if(ddVal.includes('India')){
            status= true;
            // console.log("country name found"); 
            break;
        } 
    }
    if(status){
        console.log('Selected country is available in dropdown');   
    }
    else{
        console.log('Selected country is not available in dropdown');   
    }    
    // console.log(status ? 'Selected country is available in dropdown' : 'Selected country is NOT available in dropdown')

    //select the user provided value from drop down

    const conOption =await page.$$("#country option")
    
    for(const ddVal of conOption){
        const ddValue=await ddVal.textContent()
        if(ddValue.includes('India')){
            await page.locator("#country").selectOption("India")
            // console.log("country name found"); 
            break;
        } 
    }

     await page.waitForTimeout(4000)  
});