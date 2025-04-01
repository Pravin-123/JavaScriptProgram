import { test, expect } from "@playwright/test";

test('Handle Frame', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //total frame
    const allFrame =await page.frames() //it will return array
    allFrame.forEach((allFrame, index) => {
        console.log(`Frame ${index}: ${allFrame.url()}`);
    });



    console.log("number of frame:",allFrame.length);

    //approach 1: get frame using URL or name
    //Url
    const urlFrame =await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    //await urlFrame.locator("//input[@name='mytext1']").fill('hello')
    //or
    await urlFrame.fill("//input[@name='mytext1']",'Hello')  //using urlFrame variable 


    //approach 2: using frame locator
    const urlFrame2 =await page.frameLocator("//frame[@src='frame_2.html']").locator("//input[@name='mytext2']")
    await urlFrame2.fill('Hello2')
    await page.waitForTimeout(5000)
    





})