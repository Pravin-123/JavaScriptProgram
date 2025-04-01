import { test, expect } from "@playwright/test";

test('Handle Inner Frame', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //get frame 3
    const outerFrame = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' })
    await outerFrame.locator("//input[@name='mytext3']").fill('hello')
    //or
    //await frame3.fill("//input[@name='mytext3']",'Hello')  //using urlFrame variable 

    //nested frame
    const childFrames = await outerFrame.childFrames() //it will return array, checking child iframe
    console.log('total child frame', childFrames.length);

    //radio buton check
    childFrames[0].locator("//*[@id='i6']/div[@class='vd3tt']/div").check();
    //All radio buton check
    const allRadioButton = await childFrames[0].$$("//div[@class='lLfZXe fnxRtf cNDBpf']/span/div/div/label/div/div[@class='d7L4fc bJNwt  FXLARc aomaEc ECvBRb']/div")
    for(const radioButton of allRadioButton){
        await radioButton.check()
    }

    await page.waitForTimeout(4000)
    //single checkbox check
    //await childFrames[0].locator("[aria-label='Form Autofilling']").check()
    //All checkbox check
    const allCheckbox = await childFrames[0].$$("//div[@jscontroller='sW52Ae']/div/div/label/div/div[1]")
    for (const list of allCheckbox) {
        await list.check();
    }


    await page.waitForTimeout(5000)

    for (const frame of childFrames) {
        console.log("Child Frame URL:", frame.url());
    }












})