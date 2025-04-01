const{test, expect}=require('@playwright/test')
test('LocatingMultipleElements',async({page})=>{

    await page.goto('https://www.demoblaze.com/')
    await page.waitForSelector("//div[@id='tbodyid']//h4/a")
    const productLinks =await page.$$("//div[@id='tbodyid']//h4/a")
    console.log('total product link on the page :', productLinks.length);
    
    //iterate links
    let count=0;
    for(const product of productLinks){
        count++;
        const productName =await product.textContent();
        console.log('Count:', count ,':', productName);
      }
})