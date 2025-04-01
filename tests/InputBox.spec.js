import { test,expect } from "@playwright/test";
//import test from "node:test";

test('handle inputbox', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')

//
await expect(page.locator("//input[@id='name']")).toBeVisible() //to check visible
await expect(page.locator("//input[@id='name']")).toBeEmpty() // to check Empty
await expect(page.locator("//input[@id='name']")).toBeEditable() // to check Editable
await expect(page.locator("//input[@id='name']")).toBeEnabled() // to check Enable

//await page.locator("//input[@id='name']").fill('john')
//or
await page.fill("//input[@id='name']",'John')

await page.waitForTimeout(2000) //pausing code
const inputbox= await page.locator("//input[@id='name']")

await inputbox.fill('') //clear entered value from textbox
await page.waitForTimeout(2000)

await page.fill("//input[@id='name']",'Pravin')
await page.waitForTimeout(2000)
//using keypress activity
await page.locator("//input[@id='name']").press('Control+A')
await page.locator("//input[@id='name']").press('Backspace')
await page.waitForTimeout(2000)
})