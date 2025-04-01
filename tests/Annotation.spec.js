import { test, expect } from '@playwright/test';

/*test.skip('test1', async ({ page }) => {
    console.log("Test 1");
})
test('test2', async ({ page }) => {
    console.log("Test 2");    
})
test('test3', async ({ page }) => {
    console.log("Test 3");
})
test('test4', async ({ page,browserName}) => {
    
    if(browserName=='chromium'){
        test.skip()
        console.log("Test 4");
    }

}) */
//fixme ==> it simillar to the skip only but we know that issue is there and we will wait till fix the issue
// test('test5', async ({ page }) => {
//     test.fixme()
//     console.log("Test 5");
// })

// //Fail() ==> if want to fail test case
// test('test6', async ({ page,browserName }) => {
   
// if(browserName=='firefox'){ //condition failed
//     test.fail() // this one is failed then test case become true
// }
//     //console.log("Test 6");
// })

//slow()==> Test execution will multiply by 3 like timeout=2000 , 2000*3 = 6000 ms
test('test6', async ({ page,browserName }) => {
    test.slow() 
   
    await page.goto('https://www.redbus.in/')
        //console.log("Test 6");
    })