import { test, expect } from "@playwright/test";
import { log } from "console";
test('File Upload Demo', async ({ page }) => {
    await page.goto("https://formstone.it/components/upload/demo/")

    await page.locator("(//div[@class='fs-upload-target'][normalize-space()='Drag and drop files or click to select'])[1]").click()
    //await page.setInputFiles('"C:\Users\HP\.node_repl_history"')
    await page.setInputFiles("input[type='file']", "C:\\Users\\HP\\.node_repl_history");

    //"C:\Users\HP\.node_repl_history"
   
    await page.waitForTimeout(5000)
});

test.only('Upload multiple files', async({page})=>{

await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

//attach multiple file in aaray format
await page.locator("//input[@id='filesToUpload']").setInputFiles(['C:\\Users\\HP\\Documents\\Text1.txt','C:\\Users\\HP\\Documents\\Text2.txt'])
await page.waitForTimeout(2000)

//aeertion, whether file has been attached or not
expect(await page.locator("//ul[@id='fileList']/li[1]")).toHaveText('Text1.txt')
expect(await page.locator("//ul[@id='fileList']/li[2]")).toHaveText('Text2.txt')

//detached or remove attached files
await page.locator("//input[@id='filesToUpload']").setInputFiles([])
await page.waitForTimeout(2000)

//after removing check message
expect(await page.locator("//ul[@id='fileList']/li")).toHaveText('No Files Selected')
await page.waitForTimeout(2000)
})